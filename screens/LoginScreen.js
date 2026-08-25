import React, {useState} from "react";
import {View, Text, TextInput, Pressable, StyleSheet} from "react-native";

export default function LoginScreen({navigation}) {

  const [email,setEmail] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>EHP</Text>

      <Text style={styles.title}>
        Elite Human Performance
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.text}>
          Create Athlete Account
        </Text>
      </Pressable>

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
  input:{
    backgroundColor:"#171717",
    color:"white",
    padding:15,
    borderRadius:12,
    marginBottom:15
  },
  button:{
    backgroundColor:"#e21b23",
    padding:15,
    borderRadius:12
  },
  text:{
    color:"white",
    textAlign:"center"
  }
});
