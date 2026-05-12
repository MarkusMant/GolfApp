import { StyleSheet } from "react-native";

export const GREEN = "#1a6b3c";
export const BG = "#eeeef6";

export const settingStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 24,
        padding: 32,
        width: "100%",
        alignItems: "center",
        gap: 20,
    },
    iconCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1a1a2e",
    },
    logoutButton: {
        backgroundColor: GREEN,
        borderRadius: 14,
        paddingVertical: 16,
        width: "100%",
        alignItems: "center",
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
    stayText: {
        color: GREEN,
        fontSize: 14,
        fontWeight: "600",
    },
    footer: {
        position: "absolute",
        bottom: 32,
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    footerText: {
        color: "#888",
        fontSize: 13,
    },
});
