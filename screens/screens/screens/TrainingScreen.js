import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TrainingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EHP</Text>

      <Text style={styles.title}>
        Training System
      </Text>

      <Text style={styles.card}>
        💪 Workout Plan
      </Text>

      <Text style={styles.card}>
        🏋️ Exercise Library
      </Text>

      <Text style={styles.card}>
        📈 Strength Tracking
      </Text>

      <Text style={styles.card}>
        🔥 Performance Goals
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
