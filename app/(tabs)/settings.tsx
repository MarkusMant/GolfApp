import { GREEN, settingStyles as styles } from "@/constants/settingsStyles";
import { useAuth } from "@/context/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.iconCircle}>
                    <FontAwesome name="sign-out" size={24} color={GREEN} />
                </View>

                <Text style={styles.title}>Logout</Text>

                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <FontAwesome name="circle" size={12} color="#888" />
                <Text style={styles.footerText}>GolfApp</Text>
            </View>
        </View>
    );
}
