import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function EditarProdutos({ route, navigation }) {

    const [Alert, setAlert] = useState(false);
    const [getNome, setNome] = useState('');
    const [getCapacidade, setCapacidade] = useState('');
    const [getPreco, setPreco] = useState('');
    const [getId, setId] = useState();

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            const { capacidade } = route.params;
            const { preco } = route.params;
            const { id } = route.params;

            setNome(nome);
            setCapacidade(capacidade);
            setPreco(preco);
            setId(id);
        }
    }, [])



    function alterarDados() {

        axios.put('http://localhost:5000/produtos/' + getId
            , {
                nome: getNome,
                capacidade: getCapacidade,
                preco: getPreco,
            }).then(function (response) {
                setAlert(true);
                showMessage({ message: "Produto Alterado!" });
                console.log(response);
            }).catch(function (error) {
                console.log(error);

            });
    }

    function excluirDados() {

        axios.delete('http://localhost:5000/produtos/' + getId)

            .then(() => {
                setAlert(true);
                showMessage({ message: "Produto Excluído!" });
                setNome(null);
                setCapacidade(null);
                setPreco(null);
                setId(null);
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
                centerComponent={{ text: 'Produto', style: { color: '#fff', fontSize: 24, fontWeight: '500' } }}
                leftComponent={<Icon
                    name="arrow-left"
                    type='feather'
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate('Lista de Produtos')
                    } />}
            />
            <View style={styles.container}>
                <SafeAreaView>
                    <Text style={styles.formText}>Nome</Text>
                    <TextInput style={styles.input} onChangeText={text => setNome(text)} value={getNome} />
                    <Text style={styles.formText}>Capacidade</Text>
                    <TextInput style={styles.input} onChangeText={text => setCapacidade(text)} value={getCapacidade} />
                    <Text style={styles.formText}>Preço (R$)</Text>
                    <TextInput style={styles.input} onChangeText={text => setPreco(text)} value={getPreco} />

                    <TouchableOpacity
                        style={styles.button1} onPress={() => alterarDados()}>
                        <Text style={styles.textbutton}>Alterar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button2} onPress={() =>  excluirDados()}>
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