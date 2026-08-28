import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EHP</Text>

      <Text style={styles.title}>
        Progress Tracking
      </Text>

      <Text style={styles.card}>
        ⚖ Weight Tracking
      </Text>

      <Text style={styles.card}>
        📏 Body Measurements
      </Text>

      <Text style={styles.card}>
        📸 Progress Photos
      </Text>

      <Text style={styles.card}>
        📊 Performance History
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
