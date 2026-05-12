import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

export default function StatisticsScreen() {
    return (
        <View style={styles.container}>
            <FontAwesome name="bar-chart" size={48} color="#ccc" />
            <Text style={styles.title}>Statistics</Text>
            <Text style={styles.subtitle}>Feature coming soon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f0",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1a1a2e",
    },
    subtitle: {
        fontSize: 14,
        color: "#888",
    },
});
