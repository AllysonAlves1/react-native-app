import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import EditarContatos from './screens/EditarContatos';
import CadastroDeContatos from './screens/CadastroDeContatos';
import ListaDeContatos from './screens/ListaDeContatos';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Usuário" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="Lista de Contatos" component={ListaDeContatos} options={{headerShown:false}}/>
        <Stack.Screen name="Cadastro de Contatos" component={CadastroDeContatos} options={{headerShown:false}} />
        <Stack.Screen name="Editar Contato" component={EditarContatos} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;