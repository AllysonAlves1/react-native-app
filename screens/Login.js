import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-elements';
import axios from 'axios';


export default function Login({ navigation }) {

  const [loginUser, setloginEmail] = useState("");
  const [loginPassword, setloginSenha] = useState("");

  async function login() {
    await axios.get(`http://localhost:5000/users/login/${loginUser}/${loginPassword}`,).then(function (response) {
      console.log(response.data)
      if (response.data?.length > 0) {
        navigation.navigate('Lista de Produtos')
      } else return
    }).catch(function (error) {
      console.log(error)
    });
  }

  return (
    <View style={styles.container}>
      <Avatar
        size={"xlarge"}
        icon={{ name: "user-circle-o", type: "font-awesome", color: "#000", size: 120 }}
      />

      <SafeAreaView>
        <Text style={styles.formText}>Login</Text>
        <TextInput style={styles.input} onChangeText={text => setloginEmail(text)} value={loginUser} />
        <Text style={styles.formText}>Senha</Text>
        <TextInput style={styles.input} onChangeText={text => setloginSenha(text)} value={loginPassword} secureTextEntry={true} />

        <TouchableOpacity
          style={styles.button1} onPress={() => {
            login()
          }}>
          <Text style={styles.textbutton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textbutton}>Cadastre-se</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd5be",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    paddingVertical: 8,
    width: 300,
    backgroundColor: "#fff",
  },
  formText: {
    fontSize: 20,
    marginBottom: 6,
  },

  button1: {
    alignItems: "center",
    backgroundColor: "#1361f7",
    paddingVertical: 8,
    width: 300,
    borderWidth: 1,
    borderColor: '#0945b9'
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#f71313",
    paddingVertical: 8,
    width: 300,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#bc0d0d'
  },
  textbutton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500'
  }
});