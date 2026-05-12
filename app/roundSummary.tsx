import { GREEN, roundSummaryStyles as styles } from "@/constants/roundSummaryStyles";
import { HoleEntry } from "@/lib/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function getScoreColor(strokes: number, par: number) {
    if (strokes === 0) return "#ccc";
    const diff = strokes - par;
    if (diff <= -1) return GREEN;
    if (diff >= 1) return "#e03c3c";
    return "#fff";
}

function getScoreTextColor(strokes: number, par: number) {
    if (strokes === 0) return "#999";
    const diff = strokes - par;
    if (diff === 0) return "#1a1a2e";
    return "#fff";
}

export default function RoundSummary() {
    const { holesJson, parJson } = useLocalSearchParams<{
        roundId: string;
        holesJson: string;
        parJson: string;
    }>();

    const holes: HoleEntry[] = JSON.parse(holesJson ?? "[]");
    const par: number[] = JSON.parse(parJson ?? "[]");

    const totalStrokes = holes.reduce((s, h) => s + h.strokes, 0);
    const totalPar = par.reduce((s, p) => s + p, 0);
    const scoreDiff = totalStrokes - totalPar;
    const scoreDiffStr = scoreDiff === 0 ? "E" : scoreDiff > 0 ? `+${scoreDiff}` : `${scoreDiff}`;

    const fairwaysHit = holes.filter((h) => h.fairway_hit).length;
    const fairwayPct = Math.round((fairwaysHit / holes.length) * 100);

    const greensHit = holes.filter((h) => h.green_in_reg).length;
    const girPct = Math.round((greensHit / holes.length) * 100);

    const totalPutts = holes.reduce((s, h) => s + h.putts, 0);
    const avgPutts = (totalPutts / holes.length).toFixed(2);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.headerCard}>
                <Text style={styles.completedLabel}>ROUND COMPLETED</Text>
                <Text style={styles.courseName}>My Course</Text>
                <Text style={styles.score}>
                    {totalStrokes}{" "}
                    <Text style={[styles.scoreDiff, { color: scoreDiff > 0 ? "#e03c3c" : GREEN }]}>{scoreDiffStr}</Text>
                </Text>
                <Text style={styles.handicap}>Total Par: {totalPar}</Text>
            </View>

            <View style={styles.statsRow}>
                <View style={styles.statCard}>
                    <FontAwesome name="arrow-right" size={18} color={GREEN} />
                    <Text style={styles.statLabel}>Fairways Hit</Text>
                    <Text style={styles.statValue}>{fairwayPct}%</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: `${fairwayPct}%` }]} />
                    </View>
                </View>
                <View style={styles.statCard}>
                    <FontAwesome name="circle-o" size={18} color={GREEN} />
                    <Text style={styles.statLabel}>GIR %</Text>
                    <Text style={styles.statValue}>{girPct}%</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: `${girPct}%` }]} />
                    </View>
                </View>
            </View>

            <View style={styles.statsRow}>
                <View style={styles.statCard}>
                    <Text style={styles.statLabel}>Total Putts</Text>
                    <Text style={styles.statValue}>{totalPutts}</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statLabel}>Avg/Hole</Text>
                    <Text style={styles.statValue}>{avgPutts}</Text>
                </View>
            </View>

            <View style={styles.sectionRow}>
                <Text style={styles.sectionTitle}>Scorecard</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scorecard}>
                <View>
                    <View style={styles.scorecardRow}>
                        <View style={styles.scorecardLabelCell}>
                            <Text style={styles.scorecardHeader}>Hole</Text>
                        </View>
                        {holes.map((_, i) => (
                            <View key={i} style={styles.scorecardCell}>
                                <Text style={styles.scorecardHeader}>{i + 1}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.scorecardRow}>
                        <View style={styles.scorecardLabelCell}>
                            <Text style={styles.scorecardSubHeader}>Par</Text>
                        </View>
                        {par.map((p, i) => (
                            <View key={i} style={styles.scorecardCell}>
                                <Text style={styles.scorecardPar}>{p}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.scorecardRow}>
                        <View style={styles.scorecardLabelCell}>
                            <Text style={styles.scorecardSubHeader}>{totalStrokes}</Text>
                        </View>
                        {holes.map((h, i) => (
                            <View key={i} style={styles.scorecardCell}>
                                <View
                                    style={[styles.scoreCircle, { backgroundColor: getScoreColor(h.strokes, par[i]) }]}
                                >
                                    <Text
                                        style={[
                                            styles.scoreCircleText,
                                            { color: getScoreTextColor(h.strokes, par[i]) },
                                        ]}
                                    >
                                        {h.strokes || "-"}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <Text style={styles.scrollHint}>Scroll right for back 9 results</Text>

            <TouchableOpacity style={styles.saveButton} onPress={() => router.replace("/")}>
                <FontAwesome name="save" size={16} color="#fff" />
                <Text style={styles.saveButtonText}>Save Round to History</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
