import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { IStack } from "../../Rotas";
import {
  CardContato,
  Incluir,
  Mais,
  Pesquisar,
  SafeAreaView,
  ScrollView,
} from "./styles";
import DatabaseConfiguration from "../../banco/sqlLite";
import { useIsFocused } from "@react-navigation/native";

type Props = NativeStackScreenProps<IStack, "Agenda">;

interface IContatos {
  id: string;
  nome: string;
  sobrenome: string;
  DDD: string;
  telefone: string;
}

function Agenda({ navigation }: Props) {
  const [contatos, setContatos] = useState<IContatos[]>([]);
  const [campoPesquisar, setCampoPesquisar] = useState('')
  const isFocused = useIsFocused();


  // hooks useMemo tem a capacidade de armazenar o valor
  // metodo de array filters para filtrar a array
  // transformamos em caixa baixa pois o JavaScript é case sensetive
  // includes para procurar certo valor na array
  const contatosFiltrados = useMemo(() => (
    contatos.filter((info) => (
      info.nome.toLowerCase().includes(campoPesquisar.toLowerCase())
      || info.sobrenome.toLowerCase().includes(campoPesquisar.toLowerCase())
    ))
  ), [contatos, campoPesquisar]);

  
  // a função de efeito foi criada para força a rederização em tela
  useEffect(() => {
    async function buscarContatos() {
      const response = await DatabaseConfiguration.findAll();
      setContatos(response[0].rows);
    }
    buscarContatos();
  }, [isFocused]);

  return (
    <SafeAreaView>
      <Pesquisar onChangeText={setCampoPesquisar} placeholder="Buscar..." />
      <ScrollView>
        {contatosFiltrados.map((value) => (

            <CardContato
              onPress={() =>
                navigation.navigate("PerfilContato", {
                  id: value.id,
                })
              }
              key={value.id}
            >
              <Text>
                {value.nome} {value.sobrenome}
              </Text>
            </CardContato>
          )
        )}
      </ScrollView>
      <Incluir onPress={() => navigation.navigate("IncluirContato")}>
        <Mais>+</Mais>
      </Incluir>
    </SafeAreaView>
  );
}

export default Agenda;
