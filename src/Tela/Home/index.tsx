import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { IStack } from "../../Rotas";
import DatabaseConfiguration from '../../banco/sqlLite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Column, Container, TextButton } from './styles'
import { useEffect } from "react";


type Props = NativeStackScreenProps<IStack, 'Home'>

// A função home renderiza a tela inicial do aplicativo!
function Home(props: Props) {
    // Função para Navegar de telas
    // Tipamos o atributo denominado como screen para não ter erro de colocar outro valor
    function navegar(screen: 'Calculadora' | 'Navegar' | 'Jogo' | 'Agenda' ) {
        props.navigation.navigate(screen)
    }

    // useEffect, é uma fução de efeito que renderiza dependendo dos valores que estão na array.
    // se o array estiver vazio, ele sempre executa quando o componente da tela for recriado.
    // essa função de efeito foi criada para executar o banco de dados uma vez quando o aplicativo for aberto.
    useEffect(() => {
        async function abrirBancoDeDados() {
          const situacao = await AsyncStorage.getItem('@situacao');
          if(situacao !== 'ABERTO') {
            DatabaseConfiguration.startDatabase();
            await AsyncStorage.setItem('@situacao', 'ABERTO')
          }
        } 
        abrirBancoDeDados();
      },[])

    return (
        <Container>
            <Column>
                <Button onPress={() => navegar('Calculadora')}>
                    <TextButton>Calculadora</TextButton>
                </Button>

                <Button onPress={() => navegar('Navegar')}>
                    <TextButton>Navegador</TextButton>
                </Button>
            </Column>

            <Column>
                <Button onPress={() => navegar('Jogo')}>
                    <TextButton>
                        Jogo da Velha
                    </TextButton>
                </Button>

                <Button onPress={() => navegar('Agenda')}>
                    <TextButton>Agenda Telefônica</TextButton>
                </Button>
            
            </Column>
        </Container>
    )
}

export default Home;