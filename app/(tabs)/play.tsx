import { GREEN, playScreenStyles as styles } from "@/constants/playScreenStyles";
import { useAuth } from "@/context/AuthContext";
import { createRound, deleteRound, upsertHoles } from "@/lib/rounds";
import { HoleEntry } from "@/lib/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

// Hardcoded for now until API is connected correctly
const TOTAL_HOLES = 18;
const PAR = [4, 4, 3, 4, 5, 3, 4, 5, 4, 4, 3, 4, 5, 3, 4, 4, 5, 4];
const YARDS = [385, 410, 165, 395, 520, 180, 430, 510, 375, 400, 155, 420, 530, 170, 390, 415, 505, 380];

function getParLabel(strokes: number, par: number) {
    const diff = strokes - par;
    if (strokes === 0) return "";
    if (diff === 0) return "PAR";
    if (diff === -2) return "EAGLE";
    if (diff === -1) return "BIRDIE";
    if (diff === 1) return "BOGEY";
    if (diff === 2) return "DBL BOGEY";
    if (diff < -2) return `${Math.abs(diff)} UNDER`;
    return `+${diff}`;
}

const emptyHoles = (): HoleEntry[] =>
    Array.from({ length: TOTAL_HOLES }, () => ({
        strokes: 0,
        putts: 0,
        fairway_hit: false,
        green_in_reg: false,
    }));

export default function PlayScreen() {
    const [currentHole, setCurrentHole] = useState(0);
    const { user } = useAuth();
    const [roundId, setRoundId] = useState<number | null>(null);
    const [holes, setHoles] = useState<HoleEntry[]>(
        Array.from({ length: TOTAL_HOLES }, () => ({
            strokes: 0,
            putts: 0,
            fairway_hit: false,
            green_in_reg: false,
        })),
    );

    const hole = holes[currentHole];
    const par = PAR[currentHole];
    const yards = YARDS[currentHole];

    function update(field: keyof HoleEntry, value: number | boolean) {
        setHoles((prev) => {
            const next = [...prev];
            next[currentHole] = { ...next[currentHole], [field]: value };
            return next;
        });
    }

    function changeStrokes(delta: number) {
        update("strokes", Math.max(0, hole.strokes + delta));
    }

    function changePutts(delta: number) {
        update("putts", Math.max(0, hole.putts + delta));
    }

    function nextHole() {
        if (currentHole < TOTAL_HOLES - 1) setCurrentHole((h) => h + 1);
    }

    function prevHole() {
        if (currentHole > 0) setCurrentHole((h) => h - 1);
    }

    // useFocusEffect since we want the round to persist through inactivity and be able to reset after round ends
    useFocusEffect(
        useCallback(() => {
            if (roundId !== null) return;
            if (!user) return;

            setCurrentHole(0);
            setHoles(emptyHoles());

            createRound(user.id, new Date().toISOString().split("T")[0])
                .then(setRoundId)
                .catch((error) => Alert.alert("Failed to start round", error.message));
        }, [user, roundId]),
    );

    async function finishRound() {
        if (!roundId) return;
        try {
            await upsertHoles(roundId, holes);
            router.replace({
                pathname: "/roundSummary",
                params: {
                    roundId: roundId.toString(),
                    holesJson: JSON.stringify(holes),
                    parJson: JSON.stringify(PAR),
                },
            });
            setRoundId(null);
        } catch {
            Alert.alert("Failed to save round");
        }
    }

    function endRoundEarly() {
        Alert.alert("End Round", "Are you sure you want to end this round? All progress will be lost.", [
            { text: "Cancel", style: "cancel" },
            {
                text: "End Round",
                style: "destructive",
                onPress: async () => {
                    if (roundId) {
                        try {
                            await deleteRound(roundId);
                        } catch {
                            Alert.alert("Failed to delete round");
                            return;
                        }
                    }
                    setRoundId(null);
                    setCurrentHole(0);
                    setHoles(emptyHoles());
                    router.replace("/");
                },
            },
        ]);
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.holeHeader}>
                <Text style={styles.holeLabel}>HOLE</Text>
                <Text style={styles.holeNumber}>{currentHole + 1}</Text>
            </View>
            <View style={styles.holeInfo}>
                <Text style={styles.holeInfoText}>
                    Par {par} • {yards} YDS
                </Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Strokes</Text>
                    <Text style={styles.cardHint}>Total hits to hole</Text>
                </View>
                <View style={styles.counter}>
                    <TouchableOpacity style={styles.counterBtn} onPress={() => changeStrokes(-1)}>
                        <FontAwesome name="minus" size={18} color="#555" />
                    </TouchableOpacity>
                    <View style={styles.counterValue}>
                        <Text style={styles.counterNumber}>{hole.strokes}</Text>
                        {hole.strokes > 0 && <Text style={styles.parLabel}>{getParLabel(hole.strokes, par)}</Text>}
                    </View>
                    <TouchableOpacity
                        style={[styles.counterBtn, styles.counterBtnActive]}
                        onPress={() => changeStrokes(1)}
                    >
                        <FontAwesome name="plus" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Putts</Text>
                    <Text style={styles.cardHint}>On the green</Text>
                </View>
                <View style={styles.counter}>
                    <TouchableOpacity style={styles.counterBtn} onPress={() => changePutts(-1)}>
                        <FontAwesome name="minus" size={18} color="#555" />
                    </TouchableOpacity>
                    <View style={styles.counterValue}>
                        <Text style={styles.counterNumber}>{hole.putts}</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.counterBtn, styles.counterBtnActive]}
                        onPress={() => changePutts(1)}
                    >
                        <FontAwesome name="plus" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.toggleRow}>
                <TouchableOpacity
                    style={[styles.toggleBtn, hole.fairway_hit && styles.toggleBtnActive]}
                    onPress={() => update("fairway_hit", !hole.fairway_hit)}
                >
                    <FontAwesome
                        name={hole.fairway_hit ? "check-circle" : "circle-o"}
                        size={20}
                        color={hole.fairway_hit ? "#fff" : "#555"}
                    />
                    <Text style={[styles.toggleText, hole.fairway_hit && styles.toggleTextActive]}>Fairway Hit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.toggleBtn, hole.green_in_reg && styles.toggleBtnActive]}
                    onPress={() => update("green_in_reg", !hole.green_in_reg)}
                >
                    <FontAwesome
                        name={hole.green_in_reg ? "check-circle" : "circle-o"}
                        size={20}
                        color={hole.green_in_reg ? "#fff" : "#555"}
                    />
                    <Text style={[styles.toggleText, hole.green_in_reg && styles.toggleTextActive]}>Green in Reg</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navRow}>
                {currentHole > 0 && (
                    <TouchableOpacity style={styles.prevBtn} onPress={prevHole}>
                        <FontAwesome name="arrow-left" size={16} color={GREEN} />
                        <Text style={styles.prevBtnText}>Prev</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    style={[styles.nextBtn, currentHole === 0 && { flex: 1 }]}
                    onPress={currentHole === TOTAL_HOLES - 1 ? finishRound : nextHole}
                >
                    <Text style={styles.nextBtnText}>
                        {currentHole === TOTAL_HOLES - 1 ? "Finish Round" : "Next Hole"}
                    </Text>
                    <FontAwesome name="arrow-right" size={16} color="#fff" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.endRoundBtn} onPress={endRoundEarly}>
                <Text style={styles.endRoundText}>End Round</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
