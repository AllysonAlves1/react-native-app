import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import ListaDeProdutos from './screens/ListaDeProdutos';
import EditarProdutos from './screens/EditarProdutos';
import CadastroDeProdutos from './screens/CadastroDeProdutos';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="Lista de Produtos" component={ListaDeProdutos} options={{headerShown:false}}/>
        <Stack.Screen name="Cadastro de Produtos" component={CadastroDeProdutos} options={{headerShown:false}} />
        <Stack.Screen name="Editar Produto" component={EditarProdutos} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;