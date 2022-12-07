import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as React from 'react';

export default function Register({navigation}) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.formText}>Email</Text>
  
  
          <TextInput style={styles.input} />
  
          <Text style={styles.formText}>Senha</Text>
          <TextInput style={styles.input} />
  
          <TouchableOpacity
            style={styles.button1} onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.textbutton}>Salvar</Text>
          </TouchableOpacity>
  
          <StatusBar style="auto" />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ddd",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      marginBottom:10,  
      borderWidth: 1,
      paddingVertical: 8,
      width: "100%",
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
      width: "100%",
      borderWidth: 1,
      borderColor: '#0945b9'
    },
    textbutton: {
      color: '#fff',
      fontSize: 24,
      fontWeight: '500'
    }
  });