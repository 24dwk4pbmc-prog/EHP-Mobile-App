import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NutritionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EHP</Text>

      <Text style={styles.title}>
        Nutrition Tracking
      </Text>

      <Text style={styles.card}>
        🍗 Protein Target
      </Text>

      <Text style={styles.card}>
        🔥 Calories
      </Text>

      <Text style={styles.card}>
        🥗 Meal Log
      </Text>

      <Text style={styles.card}>
        💧 Water Tracking
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
