import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EHP</Text>
      <Text style={styles.title}>
        Elite Human Performance
      </Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Athlete Dashboard
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>
          🎯 Goals
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>
          🍽 Nutrition
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>
          💪 Training
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>
          ⚖ Progress
        </Text>
      </View>
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
    marginBottom:25
  },
  card:{
    backgroundColor:"#171717",
    padding:20,
    borderRadius:15,
    marginBottom:10
  },
  text:{
    color:"white",
    fontSize:18
  }
});
