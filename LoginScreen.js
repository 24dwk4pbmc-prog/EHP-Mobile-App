import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { authClient } from "../lib/authClient";

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const validate = () => {
    if (!email.trim() || !password) {
      setMessage("Enter your email and password.");
      return false;
    }
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return false;
    }
    return true;
  };

  const signIn = async () => {
    if (!validate()) return;
    setBusy(true);
    setMessage("");
    try {
      const { error } = await authClient.signIn.email({
        email: email.trim().toLowerCase(),
        password,
      });
      if (error) throw new Error(error.message || "Sign in failed.");
      navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    } catch (error) {
      setMessage(error?.message || "Sign in failed.");
    } finally {
      setBusy(false);
    }
  };

  const createAccount = async () => {
    if (!validate()) return;
    if (!name.trim()) {
      setMessage("Enter your name to create an account.");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      const { error } = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      });
      if (error) throw new Error(error.message || "Account creation failed.");
      navigation.reset({ index: 0, routes: [{ name: "ProfileSetup" }] });
    } catch (error) {
      setMessage(error?.message || "Account creation failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EHP</Text>
      <Text style={styles.title}>Elite Human Performance</Text>
      <Text style={styles.subtitle}>Everything in one place.</Text>

      <TextInput
        style={styles.input}
        placeholder="Name â new accounts"
        placeholderTextColor="#777"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoComplete="password"
      />

      {!!message && <Text style={styles.message}>{message}</Text>}

      <Pressable
        style={[styles.button, styles.secondaryButton, busy && styles.disabled]}
        onPress={signIn}
        disabled={busy}
      >
        {busy ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign In</Text>}
      </Pressable>

      <Pressable
        style={[styles.button, busy && styles.disabled]}
        onPress={createAccount}
        disabled={busy}
      >
        <Text style={styles.buttonText}>Create Athlete Account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#070709", justifyContent: "center", paddingHorizontal: 24 },
  logo: { color: "#ff3d50", fontSize: 32, fontWeight: "900", textAlign: "center", letterSpacing: 4, marginBottom: 8 },
  title: { color: "#fff", fontSize: 26, fontWeight: "800", textAlign: "center" },
  subtitle: { color: "#9697a0", textAlign: "center", marginTop: 8, marginBottom: 28, fontSize: 16 },
  input: { backgroundColor: "#101115", borderColor: "#343640", borderWidth: 1, color: "#fff", borderRadius: 16, paddingHorizontal: 16, paddingVertical: 15, fontSize: 16, marginBottom: 12 },
  message: { color: "#ffc7cf", backgroundColor: "#241418", borderColor: "#743842", borderWidth: 1, borderRadius: 14, padding: 12, marginBottom: 12 },
  button: { backgroundColor: "#ff3d50", borderRadius: 16, paddingVertical: 16, alignItems: "center", marginTop: 10 },
  secondaryButton: { backgroundColor: "#1a1b20", borderColor: "#3b3c45", borderWidth: 1 },
  disabled: { opacity: 0.6 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "800" },
});
