import React, {useState} from "react";
import {View, Text, TextInput, Pressable, StyleSheet} from "react-native";
import { userProfile } from "../data/userProfile";

export default function ProfileSetupScreen({navigation}) {

  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [weight,setWeight] = useState("");
  const [height,setHeight] = useState("");
  const [goal,setGoal] = useState("");

  const saveProfile = () => {
    userProfile.name = name;
    userProfile.age = age;
    userProfile.weight = weight;
    userProfile.height = height;
    userProfile.goal = goal;

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>EHP</Text>

      <Text style={styles.title}>
        Create Athlete Profile
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={setAge}
      />

      <TextInput
        style={styles.input}
        placeholder="Weight"
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Height"
        onChangeText={setHeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Goal (fat loss, muscle, performance)"
        onChangeText={setGoal}
      />

      <Pressable
        style={styles.button}
        onPress={saveProfile}
      >
        <Text style={styles.buttonText}>
          Save Athlete Profile
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
    marginBottom:20
  },
  input:{
    backgroundColor:"#171717",
    color:"white",
    padding:15,
    borderRadius:12,
    marginBottom:12
  },
  button:{
    backgroundColor:"#e21b23",
    padding:15,
    borderRadius:12
  },
  buttonText:{
    color:"white",
    textAlign:"center"
  }
});
