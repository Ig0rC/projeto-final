import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Tela/Home";
import Calculadora from "../Tela/Calculadora";
import Navegar from "../Tela/Navegar";
import Jogo from "../Tela/Jogo";
import Agenda from "../Tela/Agenda";
import IncluirContato from "../Tela/IncluirContato";
import PerfilContato from "../Tela/PerfilContato";

// typando o a pilha da navegação;
export type IStack = {
  Home: undefined;
  Calculadora: undefined;
  Navegar: undefined;
  Jogo: undefined;
  Agenda: undefined;
  IncluirContato: undefined;
  PerfilContato: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<IStack>();

function Rotas() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "blueviolet",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{
          title: "Projeto Final 2022",
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Calculadora" component={Calculadora} />
      <Stack.Screen name="Navegar" component={Navegar} />
      <Stack.Screen
        options={{
          title: "Jogo da Velha",
        }}
        name="Jogo"
        component={Jogo}
      />
      <Stack.Screen
        options={{
          title: "Agenda Telefônica",
        }}
        name="Agenda"
        component={Agenda}
      />
      <Stack.Screen
        options={{
          title: "Incluir Novo Contato",
        }}
        name="IncluirContato"
        component={IncluirContato}
      />
      <Stack.Screen
        options={{
          title: "Perfil Contato",
        }}
        name="PerfilContato"
        component={PerfilContato}
      />
    </Stack.Navigator>
  );
}

export default Rotas;
