import { supabase } from "@/lib/supabase";
import { HoleNumber, NewRoundHole, RoundWithHoles } from "@/lib/types";

type HoleEntry = {
    strokes: number;
    putts: number;
    fairway_hit: boolean;
    green_in_reg: boolean;
};

export async function createRound(playerId: string, date: string): Promise<number> {
    const { data, error } = await supabase
        .from("Round")
        .insert({ player_id: playerId, date })
        .select("round_id")
        .single();

    if (error) throw error;
    return data.round_id;
}

export async function upsertHoles(roundId: number, holes: HoleEntry[]): Promise<void> {
    const rows: NewRoundHole[] = holes.map((h, i) => ({
        round_id: roundId,
        hole_number: (i + 1) as HoleNumber,
        swings: h.strokes,
        putts: h.putts,
        fairway_hit: h.fairway_hit,
        green_in_reg: h.green_in_reg,
    }));

    const { error } = await supabase.from("Hole").upsert(rows, { onConflict: "round_id,hole_number" });

    if (error) throw error;
}

export async function deleteRound(roundId: number): Promise<void> {
    await supabase.from("Hole").delete().eq("round_id", roundId);
    const { error } = await supabase.from("Round").delete().eq("round_id", roundId);
    if (error) throw error;
}

export async function getLastRound(playerId: string): Promise<RoundWithHoles | null> {
    const { data, error } = await supabase
        .from("Round")
        .select("*, Hole(*)")
        .eq("player_id", playerId)
        .order("date", { ascending: false })
        .limit(1)
        .single();

    if (error) return null;
    return { ...data, holes: data.Hole };
}

export async function getBestScore(playerId: string): Promise<number | null> {
    const { data, error } = await supabase.from("Round").select("round_id, Hole(swings)").eq("player_id", playerId);

    if (error || !data) return null;

    const totals = data
        .map((round: any) => round.Hole.reduce((sum: number, h: any) => sum + h.swings, 0))
        .filter((t: number) => t > 0);

    return totals.length > 0 ? Math.min(...totals) : null;
}