import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { BarraPesquisa, ContainerURL, Pesquisa } from "./styles";
import { useState, useRef } from 'react';

function Navegar(): JSX.Element {
    const [url, setURL] = useState('https://google.com.br');
    const urlREF = useRef('https://google.com.br');
    const [isLoading, setIsLoading] = useState(false);



    // função tem objetivo de pesquisar
    function pesquisar() {
        urlREF.current = url;
        setIsLoading((prevState) => !prevState)
    }


    return (
        <ScrollView>
            <ContainerURL>
                <BarraPesquisa value={url} onChangeText={setURL} placeholder="URL" />
                <Pesquisa onPress={pesquisar}>
                    <Text>Pesquisar</Text>
                </Pesquisa>
            </ContainerURL>

            {/* Web View é um componente que renderiza o conteudo da web */}
            <WebView 
                source={{
                    uri: urlREF.current,
                    
                }}
                style={{
                    height: 900
                }}
            />
        </ScrollView>
    )
}

export default Navegar