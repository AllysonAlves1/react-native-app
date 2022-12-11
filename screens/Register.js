import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements';
import * as React from 'react';

export default function Register({ navigation }) {
  return (
    <View style={styles.containerPrincipal} >
      <Header
        placement="center"
        centerComponent={{ text: 'Usuário', style: { color: '#fff', fontSize: 24, fontWeight: '500' } }}
        leftComponent={<Button icon={
          <Icon
            name="arrow-left"
            type='feather'
            size={24}
            color="white"
          />
        }
          onPress={() => navigation.navigate('Login')} />}
      />
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.formText}>Email</Text>
          <TextInput style={styles.input} />

          <Text style={styles.formText}>Senha</Text>
          <TextInput style={styles.input} />

          <TouchableOpacity
            style={styles.button1} onPress={() => navigation.navigate('Login')}>
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