import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Icon
          style={styles.icon} name='person-circle-outline' size={150}
        />
        <Text style={styles.formText}>Login</Text>


        <TextInput style={styles.input} />

        <Text style={styles.formText}>Senha</Text>
        <TextInput style={styles.input} />

        <TouchableOpacity
          style={styles.button1}>
          <Text style={styles.textbutton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}>
          <Text style={styles.textbutton}>Cadastre-se</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
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
  button2: {
    alignItems: "center",
    backgroundColor: "#f71313",
    paddingVertical: 8,
    width: "100%",
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
