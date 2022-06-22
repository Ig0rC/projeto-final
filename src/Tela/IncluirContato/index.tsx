import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Button, Input, Label, TextButton } from "./styles";
import DatabaseConfiguration from "../../banco/sqlLite";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IStack } from "../../Rotas";

// para pegar a tipagem das propriedades das telas
type Props = NativeStackScreenProps<IStack, "IncluirContato">;

function IncluirContato({ navigation }: Props) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [DDD, setDDD] = useState("");
  const [telefone, setTelefone] = useState("");

  // função de criar contato
  async function criarContato() {
    // Validação se todos os campos foram preenchidos
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
    DatabaseConfiguration.create({
      nome,
      sobrenome,
      ddd: DDD,
      telefone,
    });
    // após criar o contato navegar para listagem de agenda
    navigation.navigate("Agenda");
  }

  return (
    <View>
      <Label>Nome</Label>
      <Input maxLength={20} value={nome} onChangeText={setNome} placeholder="Nome" />
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
      <Button onPress={criarContato}>
        <TextButton>Incluir</TextButton>
      </Button>
    </View>
  );
}

export default IncluirContato;
