import { GREEN, homeScreenStyles as styles } from "@/constants/homeScreenStyles";
import { useAuth } from "@/context/AuthContext";
import { getBestScore, getLastRound } from "@/lib/rounds";
import { RoundWithHoles } from "@/lib/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

export default function HomeScreen() {
    const { user } = useAuth();
    const email = user?.email ?? "";
    const name = email.split("@")[0].toUpperCase();
    const [lastRound, setLastRound] = useState<RoundWithHoles | null>(null);
    const [bestScore, setBestScore] = useState<number | null>(null);

    useEffect(() => {
        if (!user) return;
        getLastRound(user.id).then(setLastRound);
        getBestScore(user.id).then(setBestScore);
    }, [user]);

    const lastRoundTotal = lastRound?.holes.reduce((s, h) => s + h.swings, 0) ?? null;

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.greeting}>
                {getGreeting()}, {name}
            </Text>
            <Text style={styles.heading}>Ready for your{"\n"}round?</Text>

            <TouchableOpacity style={styles.startButton} onPress={() => router.push("/(tabs)/play")}>
                <FontAwesome name="plus-circle" size={18} color="#fff" />
                <Text style={styles.startButtonText}>Start New Round</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Last Round</Text>
            <View style={styles.card}>
                <View style={styles.lastRoundTop}>
                    <View>
                        <Text style={styles.roundDate}>{lastRound?.date ? formatDate(lastRound.date) : "—"}</Text>
                        <Text style={styles.courseName}>Test GC</Text>
                        <View style={styles.tagRow}>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>PAR 72</Text>
                            </View>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>18 HOLES</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.scoreBox}>
                        <Text style={styles.scoreLabel}>SCORE</Text>
                        <Text style={styles.scoreValue}>{lastRoundTotal ?? "—"}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.sectionRow}>
                <Text style={styles.sectionTitle}>Personal Bests</Text>
                <TouchableOpacity onPress={() => router.push("/(tabs)/statistics")}>
                    <Text style={styles.viewStats}>View Stats</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statsRow}>
                <View style={[styles.card, styles.statCard]}>
                    <FontAwesome name="star-o" size={24} color={GREEN} />
                    <Text style={styles.statLabel}>Best Score</Text>
                    <Text style={styles.statValue}>{bestScore ?? "—"}</Text>
                </View>
                <View style={[styles.card, styles.statCard]}>
                    <FontAwesome name="flag-o" size={24} color={GREEN} />
                    <Text style={styles.statLabel}>Longest Drive</Text>
                    <Text style={styles.statValue}>Feature coming soon...</Text>
                </View>
            </View>

            <View style={styles.birdiesBanner}>
                <View style={styles.birdiesLeft}>
                    <FontAwesome name="star" size={20} color={GREEN} />
                    <View>
                        <Text style={styles.birdiesTitle}>Season Birdies</Text>
                        <Text style={styles.birdiesSub}>Feature coming soon...</Text>
                    </View>
                </View>
                {/*                 <Text style={styles.birdiesCount}>24</Text> */}
            </View>
        </ScrollView>
    );
}
