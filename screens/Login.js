import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <Avatar
          size={"xlarge"}
          icon={{ name: "user-circle-o", type: "font-awesome", color: "#000", size: 120 }}
        />

        <SafeAreaView>
          <Text style={styles.formText}>Login</Text>
          <TextInput style={styles.input} />
          <Text style={styles.formText}>Senha</Text>
          <TextInput style={styles.input} />

          <TouchableOpacity
            style={styles.button1} onPress={() => navigation.navigate('Lista de Contatos')}>
            <Text style={styles.textbutton}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2} onPress={() => navigation.navigate('Usuário')}>
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