import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { IStack } from "../../Rotas";
import { Input } from "../IncluirContato/styles";
import { Button, Deletar, Label, TextButton } from "./styles";
import DatabaseConfiguration from "../../banco/sqlLite";

type Props = NativeStackScreenProps<IStack, "PerfilContato">;

function PerfilContato({ route, navigation }: Props): JSX.Element {
  const { id } = route.params;
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [DDD, setDDD] = useState("");
  const [telefone, setTelefone] = useState("");

  // a função de efeito irá puxar os dados quando o componente tiver com valor do ID
  useEffect(() => {
    async function Buscar() {
      const response = await DatabaseConfiguration.buscar(id);
      setNome(response[0].rows[0].nome);
      setSobrenome(response[0].rows[0].sobrenome);
      setDDD(response[0].rows[0].ddd);
      setTelefone(response[0].rows[0].telefone);
    }
    Buscar();
  }, [id]);

  // função para atualizar o cadastro
  async function atualizar() {
    try {
      // validar se todos os campos estão preenchidos
      if (!nome) {
        return Alert.alert(
          "Nome é obrigátorio!",
          "todos os campos são obrigatórios!"
        );
      }
      if (!sobrenome) {
        return Alert.alert(
          "Sobrenome é obrigatório!",
          "todos os campos são obrigatórios!"
        );
      }
      if (!DDD) {
        return Alert.alert(
          "DDD é obrigatório!",
          "todos os campos são obrigatórios!"
        );
      }
      if (!telefone) {
        return Alert.alert(
          "Telefone é obrigatório!",
          "todos os campos são obrigatórios!"
        );
      }
      await DatabaseConfiguration.atualizar(id, nome, sobrenome, DDD, telefone);
      Alert.alert("Atualizado com sucesso!");
    } catch (error) {}
  }

  // a função tem objetivo de deletar o contato
  async function excluir() {
    try {
      await DatabaseConfiguration.delete(id);
      navigation.navigate("Agenda");
      Alert.alert("Excluido com sucesso!");
    } catch (error) {}
  }

  return (
    <ScrollView>
      <View>
        <Label>Nome</Label>
        <Input
          maxLength={20}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <Label>Sobrenome</Label>
        <Input
          maxLength={30}
          value={sobrenome}
          onChangeText={setSobrenome}
          placeholder="Sobrenome"
        />
        <Label>DDD</Label>
        <Input
          maxLength={2}
          keyboardType="number-pad"
          value={DDD}
          onChangeText={setDDD}
          placeholder="DDD"
        />
        <Label>Telefone</Label>
        <Input
          maxLength={9}
          keyboardType="number-pad"
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Telefone"
        />
        <Button onPress={atualizar}>
          <TextButton>Atualizar</TextButton>
        </Button>
        <Deletar onPress={excluir}>
          <TextButton>Deletar</TextButton>
        </Deletar>
      </View>
    </ScrollView>
  );
}

export default PerfilContato;
