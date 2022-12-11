import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements';
import axios from 'axios';

export default function EditarContatos({ route, navigation }) {

    function alterandoDados() {
        alterarDados();
        navigation.navigate('Lista de Contatos');
    }

    function excluindoDados() {
        excluirDados();
        navigation.navigate('Lista de Contatos');
    }

    const [getNome, setNome] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getTelefone, setTelefone] = useState('');
    const [getId, setId] = useState();

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            const { email } = route.params;
            const { telefone } = route.params;
            const { id } = route.params;

            setNome(nome);
            setEmail(email);
            setTelefone(telefone);
            setId(id);
        }
    }, [])

    function alterarDados() {

        axios.put('http://professornilson.com/testeservico/clientes/' + getId
            , {
                nome: getNome,
                email: getEmail,
                telefone: getTelefone,
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);

            });
    }

    function excluirDados() {

        axios.delete('http://professornilson.com/testeservico/clientes/' + getId)

            .then(() => {
                setNome(null);
                setEmail(null);
                setEmail(null);
                setEmail(null);
            }).catch(function (error) {
                console.log(error);

            });

    }

    return (
        <View style={styles.containerPrincipal}>
            <Header
                placement="center"
                centerComponent={{ text: 'Contato', style: { color: '#fff', fontSize: 24, fontWeight: '500' } }}
                leftComponent={<Button icon={
                    <Icon
                        name="arrow-left"
                        type='feather'
                        size={24}
                        color="white"
                    />
                }
                    onPress={() => navigation.navigate('Lista de Contatos')} />}
            />
            <View style={styles.container}>
                <SafeAreaView>
                    <Text style={styles.formText}>Nome</Text>
                    <TextInput style={styles.input} onChangeText={text => setNome(text)} value={getNome} />
                    <Text style={styles.formText}>Email</Text>
                    <TextInput style={styles.input} onChangeText={text => setEmail(text)} value={getEmail} />
                    <Text style={styles.formText}>Telefone</Text>
                    <TextInput style={styles.input} onChangeText={text => setTelefone(text)} value={getTelefone} />

                    <TouchableOpacity
                        style={styles.button1} onPress={() => alterandoDados()}>
                        <Text style={styles.textbutton}>Alterar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button2} onPress={() => excluindoDados()}>
                        <Text style={styles.textbutton}>Excluir</Text>
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