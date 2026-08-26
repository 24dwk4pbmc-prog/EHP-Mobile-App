import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>EHP</Text>

      <Text style={styles.title}>
        Elite Human Performance
      </Text>

      <Text style={styles.subtitle}>
        Athlete Dashboard
      </Text>

      <Pressable 
        style={styles.card}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.cardTitle}>👤 Athlete Profile</Text>
        <Text style={styles.cardText}>
          Track your stats, goals and body progress
        </Text>
      </Pressable>


      <Pressable 
        style={styles.card}
        onPress={() => navigation.navigate("Training")}
      >
        <Text style={styles.cardTitle}>💪 Training</Text>
        <Text style={styles.cardText}>
          Workouts, programs and performance plans
        </Text>
      </Pressable>


      <Pressable 
        style={styles.card}
        onPress={() => navigation.navigate("Nutrition")}
      >
        <Text style={styles.cardTitle}>🍽 Nutrition</Text>
        <Text style={styles.cardText}>
          Calories, protein and meal planning
        </Text>
      </Pressable>


      <Pressable 
        style={styles.card}
        onPress={() => navigation.navigate("Progress")}
      >
        <Text style={styles.cardTitle}>📊 Progress</Text>
        <Text style={styles.cardText}>
          Weight tracking and results
        </Text>
      </Pressable>


    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:"#ffffff",
    padding:25,
    justifyContent:"center"
  },

  logo:{
    fontSize:48,
    fontWeight:"900",
    color:"#d60000",
    textAlign:"center"
  },

  title:{
    fontSize:24,
    fontWeight:"700",
    textAlign:"center",
    marginTop:10
  },

  subtitle:{
    fontSize:18,
    textAlign:"center",
    marginBottom:30,
    color:"#555"
  },

  card:{
    backgroundColor:"#111",
    padding:20,
    borderRadius:15,
    marginBottom:15
  },

  cardTitle:{
    color:"#fff",
    fontSize:20,
    fontWeight:"700"
  },

  cardText:{
    color:"#ccc",
    marginTop:8,
    fontSize:14
  }

});
