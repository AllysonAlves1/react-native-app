import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function Register({ navigation }) {

  const [Alert, setAlert] = useState(false);
  const [registerNome, setRegisterNome] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerSenha, setRegisterSenha] = useState("");

  async function cadastrarUsuario() {
    await axios.post('http://localhost:5000/users/register',
      {
        username: registerNome,
        email: registerEmail,
        password: registerSenha
      })
      .then(function (response) {
        console.log(response);
        setAlert(true);
        showMessage({ message: "Usuário Cadastrado!" });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={styles.containerPrincipal} >
      {Alert ? <FlashMessage position={"center"} /> : <></>}
      <Header
        backgroundColor='gray'
        placement="center"
        centerComponent={{ text: 'Cadastro de Usuário', style: { color: '#fff', fontSize: 24, fontWeight: '500' } }}
        leftComponent={<Icon
          name="arrow-left"
          type='feather'
          size={30}
          color="white"
          onPress={() => navigation.navigate('Login')
          } />}
      />
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.formText}>Nome</Text>
          <TextInput style={styles.input} onChangeText={text => setRegisterNome(text)} value={registerNome} />

          <Text style={styles.formText}>Email</Text>
          <TextInput style={styles.input} onChangeText={text => setRegisterEmail(text)} value={registerEmail} />

          <Text style={styles.formText}>Senha</Text>
          <TextInput style={styles.input} onChangeText={text => setRegisterSenha(text)} value={registerSenha} />

          <TouchableOpacity
            style={styles.button1} onPress={() =>cadastrarUsuario()}>
            <Text style={styles.textbutton}>Salvar</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#ddd"
  },
  container: {
    flex: 1,
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
  textbutton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500'
  }
});