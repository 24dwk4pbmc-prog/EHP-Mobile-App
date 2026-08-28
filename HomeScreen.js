import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { userProfile } from "../data/userProfile";

export default function HomeScreen({ navigation }) {

  const [athlete, setAthlete] = useState({ ...userProfile });

  useFocusEffect(
    useCallback(() => {
      setAthlete({ ...userProfile });
    }, [])
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Text style={styles.logo}>EHP</Text>

      <Text style={styles.title}>
        Elite Human Performance
      </Text>

      <Text style={styles.subtitle}>
        Athlete Command Centre
      </Text>


      <View style={styles.profileCard}>

        <Text style={styles.welcome}>
          {athlete.name
            ? `Welcome, ${athlete.name}`
            : "Welcome Athlete"}
        </Text>

        <View style={styles.statsRow}>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>WEIGHT</Text>
            <Text style={styles.statValue}>
              {athlete.weight || "--"} kg
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>AGE</Text>
            <Text style={styles.statValue}>
              {athlete.age || "--"}
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>HEIGHT</Text>
            <Text style={styles.statValue}>
              {athlete.height || "--"}
            </Text>
          </View>

        </View>

        <Text style={styles.goalLabel}>
          CURRENT GOAL
        </Text>

        <Text style={styles.goalText}>
          {athlete.goal || "Set your performance goal"}
        </Text>

      </View>


      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.cardTitle}>
          👤 Athlete Profile
        </Text>

        <Text style={styles.cardText}>
          View and manage your athlete information
        </Text>
      </Pressable>


      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Nutrition")}
      >
        <Text style={styles.cardTitle}>
          🍽 Nutrition
        </Text>

        <Text style={styles.cardText}>
          Calories, protein, meals and daily targets
        </Text>
      </Pressable>


      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Training")}
      >
        <Text style={styles.cardTitle}>
          💪 Training
        </Text>

        <Text style={styles.cardText}>
          Programs, workouts and performance tracking
        </Text>
      </Pressable>


      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Progress")}
      >
        <Text style={styles.cardTitle}>
          📊 Progress
        </Text>

        <Text style={styles.cardText}>
          Weight, measurements and performance history
        </Text>
      </Pressable>


      <Pressable
        style={styles.editButton}
        onPress={() => navigation.navigate("ProfileSetup")}
      >
        <Text style={styles.editButtonText}>
          Edit Athlete Profile
        </Text>
      </Pressable>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  content: {
    padding: 22,
    paddingBottom: 50
  },

  logo: {
    fontSize: 48,
    fontWeight: "900",
    color: "#d60000",
    textAlign: "center"
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111111",
    textAlign: "center"
  },

  subtitle: {
    fontSize: 15,
    color: "#666666",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 24
  },

  profileCard: {
    backgroundColor: "#111111",
    borderRadius: 20,
    padding: 20,
    marginBottom: 18
  },

  welcome: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 18
  },

  statsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 18
  },

  statBox: {
    flex: 1,
    backgroundColor: "#1d1d1d",
    borderRadius: 12,
    padding: 12
  },

  statLabel: {
    color: "#999999",
    fontSize: 10,
    fontWeight: "700"
  },

  statValue: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "800",
    marginTop: 5
  },

  goalLabel: {
    color: "#d60000",
    fontSize: 11,
    fontWeight: "800"
  },

  goalText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 5
  },

  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5"
  },

  cardTitle: {
    color: "#111111",
    fontSize: 19,
    fontWeight: "800"
  },

  cardText: {
    color: "#666666",
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20
  },

  editButton: {
    backgroundColor: "#d60000",
    borderRadius: 14,
    padding: 16,
    marginTop: 8
  },

  editButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800"
  }

});
