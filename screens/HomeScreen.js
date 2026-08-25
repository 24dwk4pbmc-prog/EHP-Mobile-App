import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EHP</Text>
      <Text style={styles.title}>
        Elite Human Performance
      </Text>

      <Text style={styles.text}>
        Athlete Dashboard
      </Text>

      <Text style={styles.card}>
        🎯 Goals
      </Text>

      <Text style={styles.card}>
        🍽 Nutrition
      </Text>

      <Text style={styles.card}>
        💪 Training
      </Text>

      <Text style={styles.card}>
        ⚖ Progress
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
  text:{
    color:"white",
    fontSize:20
  },
  card:{
    color:"white",
    backgroundColor:"#171717",
    padding:20,
    marginTop:10,
    borderRadius:15
  }
});
