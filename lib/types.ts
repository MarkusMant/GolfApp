export type HoleNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;

export type RoundData = {
    round_id: number;
    player_id: string;
    date: string;
};

export type RoundHole = {
    round_id: number;
    hole_number: HoleNumber;
    swings: number;
    putts: number;
    fairway_hit: boolean;
    green_in_reg: boolean;
};

export type RoundWithHoles = RoundData & {
    holes: RoundHole[];
};

export type NewRoundData = {
    date: string;
};

export type NewRoundHole = {
    round_id: number;
    hole_number: HoleNumber;
    swings: number;
    putts: number;
    fairway_hit: boolean;
    green_in_reg: boolean;
};

export type HoleEntry = {
    strokes: number;
    putts: number;
    fairway_hit: boolean;
    green_in_reg: boolean;
};
