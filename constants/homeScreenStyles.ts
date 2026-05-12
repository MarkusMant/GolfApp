import { StyleSheet } from "react-native";

export const GREEN = "#1a6b3c";
export const BG = "#f5f5f0";

export const homeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG,
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },
    greeting: {
        fontSize: 12,
        fontWeight: "600",
        color: "#666",
        letterSpacing: 1,
        marginTop: 48,
    },
    heading: {
        fontSize: 28,
        fontWeight: "800",
        color: "#1a1a2e",
        marginTop: 4,
        marginBottom: 20,
        lineHeight: 34,
    },
    startButton: {
        backgroundColor: GREEN,
        borderRadius: 14,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginBottom: 28,
    },
    startButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
    sectionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1a1a2e",
        marginBottom: 10,
    },
    viewStats: {
        fontSize: 13,
        color: GREEN,
        fontWeight: "600",
        marginBottom: 10,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    lastRoundTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    roundDate: {
        fontSize: 11,
        color: "#888",
        marginBottom: 4,
        letterSpacing: 0.5,
    },
    courseName: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1a1a2e",
        marginBottom: 8,
    },
    tagRow: {
        flexDirection: "row",
        gap: 6,
    },
    tag: {
        backgroundColor: "#f0f0f0",
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    tagText: {
        fontSize: 10,
        color: "#666",
        fontWeight: "600",
    },
    scoreBox: {
        alignItems: "flex-end",
    },
    scoreLabel: {
        fontSize: 10,
        color: "#888",
        letterSpacing: 1,
    },
    scoreValue: {
        fontSize: 40,
        fontWeight: "800",
        color: "#1a1a2e",
        lineHeight: 44,
    },
    statsRow: {
        flexDirection: "row",
        gap: 12,
    },
    statCard: {
        flex: 1,
        gap: 6,
    },
    statLabel: {
        fontSize: 12,
        color: "#888",
        marginTop: 4,
    },
    statValue: {
        fontSize: 24,
        fontWeight: "800",
        color: "#1a1a2e",
    },
    statUnit: {
        fontSize: 14,
        fontWeight: "400",
        color: "#888",
    },
    birdiesBanner: {
        backgroundColor: "#e8f5ee",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    birdiesLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    birdiesTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#1a1a2e",
    },
    birdiesSub: {
        fontSize: 11,
        color: "#666",
        marginTop: 2,
    },
    birdiesCount: {
        fontSize: 36,
        fontWeight: "800",
        color: "#1a1a2e",
    },
});
