import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");

  const saveProfile = () => {
    if (!name || !age || !weight || !height || !goal) {
      Alert.alert("Complete your profile", "Please fill in all fields.");
      return;
    }

    Alert.alert("Profile Saved", "Your athlete profile has been updated.");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.logo}>EHP</Text>
      <Text style={styles.title}>ATHLETE PROFILE</Text>

      <Text style={styles.subtitle}>
        Build your performance profile
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          style={styles.input}
          placeholder="Athlete name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>AGE</Text>
        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor="#888"
          keyboardType="number-pad"
          value={age}
          onChangeText={setAge}
        />

        <Text style={styles.label}>WEIGHT</Text>
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          placeholderTextColor="#888"
          keyboardType="decimal-pad"
          value={weight}
          onChangeText={setWeight}
        />

        <Text style={styles.label}>HEIGHT</Text>
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          placeholderTextColor="#888"
          keyboardType="decimal-pad"
          value={height}
          onChangeText={setHeight}
        />

        <Text style={styles.label}>PERFORMANCE GOAL</Text>
        <TextInput
          style={styles.input}
          placeholder="Fat loss, muscle, strength, performance..."
          placeholderTextColor="#888"
          value={goal}
          onChangeText={setGoal}
        />

        <TouchableOpacity style={styles.button} onPress={saveProfile}>
          <Text style={styles.buttonText}>SAVE ATHLETE PROFILE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>YOUR PERFORMANCE</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>WEIGHT</Text>
            <Text style={styles.statValue}>
              {weight ? `${weight} kg` : "-- kg"}
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statLabel}>AGE</Text>
            <Text style={styles.statValue}>{age || "--"}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statLabel}>HEIGHT</Text>
            <Text style={styles.statValue}>
              {height ? `${height} cm` : "-- cm"}
            </Text>
          </View>
        </View>

        <Text style={styles.goalLabel}>CURRENT GOAL</Text>
        <Text style={styles.goalText}>
          {goal || "Set your performance goal"}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 60,
  },

  logo: {
    color: "#E31B23",
    fontSize: 42,
    fontWeight: "900",
    marginBottom: 8,
  },

  title: {
    color: "#111111",
    fontSize: 32,
    fontWeight: "900",
  },

  subtitle: {
    color: "#777777",
    fontSize: 17,
    marginTop: 6,
    marginBottom: 28,
  },

  card: {
    backgroundColor: "#F6F6F6",
    borderRadius: 24,
    padding: 20,
  },

  label: {
    color: "#111111",
    fontWeight: "800",
    fontSize: 13,
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 55,
    fontSize: 16,
    color: "#111111",
  },

  button: {
    backgroundColor: "#E31B23",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 24,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
  },

  statusCard: {
    backgroundColor: "#111111",
    borderRadius: 24,
    padding: 22,
    marginTop: 24,
  },

  statusTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginBottom: 20,
  },

  stats: {
    flexDirection: "row",
    gap: 8,
  },

  stat: {
    flex: 1,
    backgroundColor: "#1D1D1D",
    borderRadius: 16,
    padding: 13,
  },

  statLabel: {
    color: "#888888",
    fontSize: 11,
    fontWeight: "800",
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 8,
  },

  goalLabel: {
    color: "#E31B23",
    fontWeight: "900",
    fontSize: 13,
    marginTop: 22,
  },

  goalText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 19,
    marginTop: 7,
  },
});
