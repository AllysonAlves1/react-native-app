import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Header, Icon } from 'react-native-elements';
import axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function CadastroDeProdutos({ navigation }) {

    const [Alert, setAlert] = useState(false);
    const [getNome, setNome] = useState([]);
    const [getCapacidade, setCapacidade] = useState([]);
    const [getPreco, setPreco] = useState([]);
    const [getImg, setImg] = useState([]);

    async function inserirDados() {
        await axios.post('localhost:5000/produtos/register'
            , {
                nome: getNome,
                capacidade: getCapacidade,
                preco: getPreco,
                img: getImg
            }).then(function (response) {
                console.log(response);
                setAlert(true);
                showMessage({ message: "Produto Cadastrado!" });
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (

        <View style={styles.containerPrincipal}>
            {Alert ? <FlashMessage position={"center"} /> : <></>}
            <Header
                backgroundColor='gray'
                placement="center"
                centerComponent={{ text: 'Produto', style: { color: '#fff', fontSize: 24, fontWeight: '500' } }} arrow-left
                leftComponent={<Icon
                    name="arrow-left"
                    type='feather'
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate('Lista de Produtos')
                    }
                />}
            />
            <View style={styles.container}>
                <SafeAreaView>
                    <Text style={styles.formText}>Nome</Text>
                    <TextInput style={styles.input} onChangeText={text => setNome(text)} value={getNome} />
                    <Text style={styles.formText}>Capacidade</Text>
                    <TextInput style={styles.input} onChangeText={text => setCapacidade(text)} value={getCapacidade} />
                    <Text style={styles.formText}>Preço (R$)</Text>
                    <TextInput style={styles.input} onChangeText={text => setPreco(text)} value={getPreco} />
                    <Text style={styles.formText}>URL Image</Text>
                    <TextInput style={styles.input} onChangeText={text => setImg(text)} value={getImg} />

                    <TouchableOpacity
                        style={styles.button1} onPress={() => inserirDados()}>
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
        fontWeight: '500'
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