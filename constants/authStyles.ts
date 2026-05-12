import { StyleSheet } from "react-native";

export const GREEN = "#1a6b3c";
export const BG = "#eeeef6";

export const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG,
        padding: 24,
        justifyContent: "center",
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 12,
    },
    logoIcon: {
        fontSize: 36,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#1a1a2e",
        textAlign: "center",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 13,
        color: "#888",
        textAlign: "center",
        marginBottom: 28,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 6,
        marginTop: 12,
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    inputError: {
        borderColor: "#e03c3c",
    },
    inputIcon: {
        fontSize: 16,
        marginRight: 8,
        color: "#aaa",
    },
    input: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 15,
        color: "#333",
    },
    errorText: {
        color: "#e03c3c",
        fontSize: 12,
        marginTop: 4,
    },
    primaryButton: {
        backgroundColor: GREEN,
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 28,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    primaryButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    footerRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 28,
    },
    footerText: {
        color: "#888",
        fontSize: 14,
    },
    footerLink: {
        color: GREEN,
        fontSize: 14,
        fontWeight: "700",
    },
    logoCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: BG,
        alignItems: "center",
        justifyContent: "center",
    },
    forgotContainer: {
        alignItems: "flex-end",
        marginTop: 8,
        marginBottom: 20,
    },
    forgotText: {
        color: GREEN,
        fontSize: 13,
        fontWeight: "600",
    },
    signInButton: {
        backgroundColor: GREEN,
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: "center",
    },
    signInText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    dividerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#ccc",
    },
    dividerText: {
        fontSize: 11,
        color: "#aaa",
        marginHorizontal: 10,
        letterSpacing: 0.5,
    },
    socialRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
    },
    socialButton: {
        flex: 1,
        backgroundColor: "#e8e8f0",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
    },
    socialText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#444",
    },
    registerRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 28,
    },
    registerText: {
        color: "#888",
        fontSize: 14,
    },
    registerLink: {
        color: GREEN,
        fontSize: 14,
        fontWeight: "700",
    },
    registerButton: {
        backgroundColor: GREEN,
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 28,
    },
    registerButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    loginRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 28,
    },
    loginText: {
        color: "#888",
        fontSize: 14,
    },
    loginLink: {
        color: GREEN,
        fontSize: 14,
        fontWeight: "700",
    },
});
