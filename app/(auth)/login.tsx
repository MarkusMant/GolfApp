import { authStyles as styles } from "@/constants/authStyles";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) Alert.alert(error.message);
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logoCircle}>
                    <Text style={styles.logoIcon}>⛳</Text>
                </View>
            </View>

            <Text style={styles.title}>GolfApp</Text>

            <Text style={styles.label}>Email or Username</Text>
            <View style={styles.inputRow}>
                <Text style={styles.inputIcon}>👤</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#aaa"
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputRow}>
                <Text style={styles.inputIcon}>🔒</Text>
                <TextInput
                    style={styles.input}
                    placeholder="••••••••"
                    placeholderTextColor="#aaa"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text>show</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotContainer}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.signInButton, loading && styles.buttonDisabled]}
                onPress={signInWithEmail}
                disabled={loading}
            >
                <Text style={styles.signInText}>Sign In →</Text>
            </TouchableOpacity>

            <View style={styles.dividerRow}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
                <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialRow}>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialText}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialText}>iOS</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.registerRow}>
                <Text style={styles.registerText}>New user? </Text>
                <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                    <Text style={styles.registerLink}>Register now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
