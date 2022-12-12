import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from "axios";
import { Card, Header, Icon } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native'

export default function ListaDeProdutos({ navigation }) {

    const [list, setlist] = useState([]);
    const refresh = useIsFocused();

    useEffect(() => {
        function consultarDados() {
            axios.get('http://localhost:5000/produtos')
                .then(function (response) {
                    setlist(response.data);
                }).catch(function (error) {
                    console.log(error);
                });
        }
        consultarDados();
    }, [refresh])

    return (
        <View style={styles.container}>
            <Header
                backgroundColor='gray'
                placement="center"
                centerComponent={{ text: 'Lista de Produtos', style: { color: '#fff', fontSize: 24, fontWeight: '500' } }}
                rightComponent={
                    <Icon
                        name="plus"
                        type='feather'
                        size={30}
                        color="white"
                        onPress={() => navigation.navigate('Cadastro de Produtos')
                        }
                    />
                }
            />
            <ScrollView>
                {
                    list.map((l, i) => (
                        <Card
                            key={i} >
                            <Card.Image onPress={() => navigation.navigate('Editar Produto',
                                {
                                    nome: l.nome,
                                    capacidade: l.capacidade,
                                    preco: l.preco,
                                    img: l.img,
                                    id: l.id
                                }
                            )} source={{ uri: l.img }} style={
                                styles.img
                            } />
                            <Text style={styles.text}>Produto: {l.nome}</Text>
                            <Text style={styles.text}>Armazenamento: {l.capacidade}</Text>
                            <Text style={styles.text}>Valor: {l.preco}</Text>
                        </Card>
                    ))
                }
            </ScrollView>

        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
    },
    view: {
        backgroundColor: '#fff',
        paddingBottom: 20
    },
    img: {
        resizeMode: 'contain',
        aspectRatio: 1.5
    },
    text: {
        paddingTop: 5,
        fontSize: 20

    }
});