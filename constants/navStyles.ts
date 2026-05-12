import { StyleSheet } from "react-native";

export const GREEN = "#1a6b3c";
export const GREEN_LIGHT = "#e6f2ec";

export const navStyles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderTopColor: "#f0f0f0",
        height: 72,
        paddingBottom: 8,
        paddingTop: 8,
        paddingHorizontal: 8,
    },
    tabItem: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16,
        gap: 2,
    },
    tabItemActive: {
        backgroundColor: GREEN_LIGHT,
    },
    tabLabel: {
        fontSize: 11,
        color: "#9ca3af",
        fontWeight: "500",
    },
    tabLabelActive: {
        color: GREEN,
        fontWeight: "600",
    },
});
