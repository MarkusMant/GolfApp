import { StyleSheet } from "react-native";

export const GREEN = "#1a6b3c";
export const BG = "#f5f5f0";

export const playScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG,
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },
    holeHeader: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        marginTop: 48,
        gap: 6,
    },
    holeLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#888",
        marginBottom: 6,
        letterSpacing: 2,
    },
    holeNumber: {
        fontSize: 64,
        fontWeight: "800",
        color: "#1a1a2e",
        lineHeight: 68,
    },
    holeInfo: {
        alignItems: "center",
        marginBottom: 24,
    },
    holeInfoText: {
        backgroundColor: "#e8e8e8",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 6,
        fontSize: 13,
        color: "#555",
        fontWeight: "600",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: "700",
        color: "#1a1a2e",
    },
    cardHint: {
        fontSize: 13,
        color: "#888",
    },
    counter: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    counterBtn: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        justifyContent: "center",
    },
    counterBtnActive: {
        backgroundColor: GREEN,
    },
    counterValue: {
        flex: 1,
        alignItems: "center",
    },
    counterNumber: {
        fontSize: 28,
        fontWeight: "800",
        color: "#1a1a2e",
    },
    parLabel: {
        fontSize: 11,
        fontWeight: "700",
        color: GREEN,
        letterSpacing: 0.5,
    },
    toggleRow: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 24,
    },
    toggleBtn: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingVertical: 16,
    },
    toggleBtnActive: {
        backgroundColor: GREEN,
    },
    toggleText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#555",
    },
    toggleTextActive: {
        color: "#fff",
    },
    navRow: {
        flexDirection: "row",
        gap: 12,
    },
    prevBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    prevBtnText: {
        fontSize: 15,
        fontWeight: "700",
        color: GREEN,
    },
    nextBtn: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        backgroundColor: GREEN,
        borderRadius: 14,
        paddingVertical: 16,
    },
    nextBtnText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#fff",
    },
    endRoundBtn: {
        marginTop: 12,
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: "center",
        backgroundColor: "#eb331fc0",
    },
    endRoundText: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "700",
    },
});
