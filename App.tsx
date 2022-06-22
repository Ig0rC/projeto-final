import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/Rotas';
import 'react-native-get-random-values';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    // O NavigationContaineré responsável por gerenciar o estado do seu aplicativo e vincular seu navegador de nível superior ao ambiente do aplicativo.
    <NavigationContainer>
      <StatusBar backgroundColor="blueviolet" barStyle="light-content"/>
      <Rotas />
    </NavigationContainer>
  );
}

