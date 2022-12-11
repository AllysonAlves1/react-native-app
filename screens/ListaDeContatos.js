import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import axios from "axios";
import { ListItem, Avatar, Header, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native'

export default function ListaDeContatos({ route, navigation }) {
    
    const [list, setlist] = useState([]);
    const refresh = useIsFocused();
    
    useEffect(() => {
        function consultarDados() {
            axios.get('http://professornilson.com/testeservico/clientes')
                .then(function (response) {
                    setlist(response.data);
                }).catch(function (error) {
                    console.log(error);
                });
        }
        consultarDados();
    }, [refresh])

    return (
        <View>
            <Header
                placement="center"
                centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize: 24, fontWeight: '500' } }}
                rightComponent={<Button icon={
                    <Icon
                        name="plus"
                        type='feather'
                        size={24}
                        color="white"
                    />
                }
                onPress={() => navigation.navigate('Cadastro de Contatos')} />}
            />
            <ScrollView>
                {
                    list.map((l, i) => (
                        <ListItem key={i} bottomDivider onPress={() => navigation.navigate('Editar Contato', 
                        {
                            nome: l.nome,
                            email: l.email,
                            telefone: l.telefone,
                            id: l.id
                        }
                        )}>
                            <Avatar source={{ uri: "https://img.myloview.com.br/fotomurais/pessoa-icone-vetorial-macho-usuario-perfil-avatar-simbolo-em-circulo-apartamento-cor-glyph-pictograma-ilustracao-700-140985837.jpg" }} />
                            <ListItem.Content>
                                <ListItem.Title>{l.nome}</ListItem.Title>
                                <ListItem.Subtitle>Email: {l.email}</ListItem.Subtitle>
                                <ListItem.Subtitle>Telefone: {l.telefone}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
        </View>
    )
}