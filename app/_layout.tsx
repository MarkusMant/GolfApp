import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { router, Stack, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useEffect } from "react";

export const unstable_settings = {
    anchor: "(auth)",
};

function RootLayoutNav() {
    const colorScheme = useColorScheme();
    const { session, loading } = useAuth();
    const segments = useSegments();

    useEffect(() => {
        if (loading) return;
        const inAuth = segments[0] === "(auth)";
        if (session && inAuth) router.replace("/");
        else if (!session && !inAuth) router.replace("/(auth)/login");
    }, [session, loading, segments]);

    if (loading) return null; //TODO: Implement splash/loading screen

    return (
        <AuthProvider>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="roundSummary" options={{ headerShown: false }} />
                </Stack>
                <StatusBar style="dark" backgroundColor="#eeeef6" />
            </ThemeProvider>
        </AuthProvider>
    );
}
export default function RootLayout() {
    return (
        <AuthProvider>
            <RootLayoutNav />
        </AuthProvider>
    );
}
