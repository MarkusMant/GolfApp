import { authStyles as styles } from "@/constants/authStyles";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);

    async function signUpWithEmail() {
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match");
            return;
        }
        setLoading(true);
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({ email, password });
        if (error) Alert.alert(error.message);
        if (!session) Alert.alert("Please check your inbox for email verification!");
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoIcon}>⛳</Text>
            </View>

            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Start tracking your rounds</Text>

            <Text style={styles.label}>Email</Text>
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

            <Text style={styles.label}>Confirm Password</Text>
            <View
                style={[
                    styles.inputRow,
                    confirmPassword.length > 0 && password !== confirmPassword && styles.inputError,
                ]}
            >
                <Text style={styles.inputIcon}>🔒</Text>
                <TextInput
                    style={styles.input}
                    placeholder="••••••••"
                    placeholderTextColor="#aaa"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry={!showConfirm}
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                    <Text>show</Text>
                </TouchableOpacity>
            </View>
            {confirmPassword.length > 0 && password !== confirmPassword && (
                <Text style={styles.errorText}>Passwords do not match</Text>
            )}

            <TouchableOpacity
                style={[styles.registerButton, loading && styles.buttonDisabled]}
                onPress={signUpWithEmail}
                disabled={loading}
            >
                <Text style={styles.registerButtonText}>Register →</Text>
            </TouchableOpacity>

            <View style={styles.loginRow}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.loginLink}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
