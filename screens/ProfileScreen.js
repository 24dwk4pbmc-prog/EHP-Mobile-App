import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EHP</Text>

      <Text style={styles.title}>
        Athlete Profile
      </Text>

      <Text style={styles.card}>
        Name: New Athlete
      </Text>

      <Text style={styles.card}>
        Goal: Set Performance Goal
      </Text>

      <Text style={styles.card}>
        Weight: Add Current Weight
      </Text>

      <Text style={styles.card}>
        Training Level: Select Level
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#050505",
    padding:25,
    justifyContent:"center"
  },
  logo:{
    color:"#e21b23",
    fontSize:50,
    fontWeight:"bold"
  },
  title:{
    color:"white",
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },
  card:{
    color:"white",
    backgroundColor:"#171717",
    padding:18,
    marginTop:10,
    borderRadius:15
  }
});
