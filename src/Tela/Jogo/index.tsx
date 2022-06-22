import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { BolaOuX, CasasJogos, Container, QualVez, Restartar, Tabela, TextRestart, VencedorVelha } from "./styles";


// Descrevemos a estrutura de Cada Objeto
interface Casas {
  um: "B" | "X" | "V";
  dois: "B" | "X" | "V";
  tres: "B" | "X" | "V";
  quatro: "B" | "X" | "V";
  cinco: "B" | "X" | "V";
  seis: "B" | "X" | "V";
  sete: "B" | "X" | "V";
  oito: "B" | "X" | "V";
  nove: "B" | "X" | "V";
}

function Jogo() {
  // variavél de estado para preencher que foi o ganhador!
  const [ganhador, setGanhador] = useState({
    ganhou: false,
    ganhador: "",
  });

  // o estado tem objetivo de manter o valor das casas no jogo da velha
  const [marcacao, setMarcacao] = useState<Casas>({
    um: "V",
    dois: "V",
    tres: "V",
    quatro: "V",
    cinco: "V",
    seis: "V",
    sete: "V",
    oito: "V",
    nove: "V",
  });

  // o estado tem objetivo de mostrar qual é a vez do jogador
  const [vez, setVez] = useState(true);


  // a funçao tem objetivo de mostrar em tela quem escolheu a casa
  function qualEValor(value: string) {
    if (value === "B") {
      return "O";
    }
    if (value === "X") {
      return "X";
    }
    if (value === "V") {
      return "";
    }
  }


  // A função tem objetivo de inserir nas casas bolha ou X
  function alterarMarcacao(
    position:
      | "um"
      | "dois"
      | "tres"
      | "quatro"
      | "cinco"
      | "seis"
      | "sete"
      | "oito"
      | "nove"
  ) {
    // condição caso a casa já foi escolhida
    if (marcacao[position] !== "V") {
      return Alert.alert(
        "Impossível realizar ação",
        "não é permitido escolher um campo já escolhido"
      );
    }
    // de acordo com a vez colocamos X ou O
    if (vez === true) {
      setMarcacao((prevState) => ({
        ...prevState,
        [position]: "X",
      }));
      setVez((prevState) => !prevState);
    }
    if (vez === false) {
      setMarcacao((prevState) => ({
        ...prevState,
        [position]: "B",
      }));
      setVez((prevState) => !prevState);
    }
  }

  // a função tem objetivo de mudar a tela
  function jogarNovamente() {
    setGanhador({
        ganhou: false,
        ganhador: '',
    })
    setVez(true);
    setMarcacao({
        um: "V",
        dois: "V",
        tres: "V",
        quatro: "V",
        cinco: "V",
        seis: "V",
        sete: "V",
        oito: "V",
        nove: "V",
    })
  }


  // o hook useEffect tem objetivo de verificar cada vez que o estado marcacao altera 
  // se deu velha, ou se teve um ganhador
  useEffect(() => {
    if (marcacao.um === "B" && marcacao.dois === "B" && marcacao.tres === "B") {
      return setGanhador({
        ganhador: "O ganhou!",
        ganhou: true,
      });
    }

    if (marcacao.um === "X" && marcacao.dois === "X" && marcacao.tres === "X") {
      return setGanhador({
        ganhador: "X ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.quatro === "B" &&
      marcacao.cinco === "B" &&
      marcacao.seis === "B"
    ) {
      return setGanhador({
        ganhador: "O ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.quatro === "X" &&
      marcacao.cinco === "X" &&
      marcacao.seis === "X"
    ) {
      return setGanhador({
        ganhador: "X ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.sete === "B" &&
      marcacao.oito === "B" &&
      marcacao.nove === "B"
    ) {
      return setGanhador({
        ganhador: "O ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.sete === "X" &&
      marcacao.oito === "X" &&
      marcacao.nove === "X"
    ) {
      return setGanhador({
        ganhador: "X ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.um === "B" &&
      marcacao.quatro === "B" &&
      marcacao.sete === "B"
    ) {
      return setGanhador({
        ganhador: "O ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.um === "X" &&
      marcacao.quatro === "X" &&
      marcacao.sete === "X"
    ) {
      return setGanhador({
        ganhador: "X ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.dois === "B" &&
      marcacao.cinco === "B" &&
      marcacao.oito === "B"
    ) {
      return setGanhador({
        ganhador: "O ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.dois === "X" &&
      marcacao.cinco === "X" &&
      marcacao.oito === "X"
    ) {
      return setGanhador({
        ganhador: "X ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.tres === "B" &&
      marcacao.seis === "B" &&
      marcacao.nove === "B"
    ) {
      return setGanhador({
        ganhador: "O ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.tres === "X" &&
      marcacao.seis === "X" &&
      marcacao.nove === "X"
    ) {
      return setGanhador({
        ganhador: "X ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.um === "B" &&
      marcacao.cinco === "B" &&
      marcacao.nove === "B"
    ) {
      return setGanhador({
        ganhador: "O ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.um === "X" &&
      marcacao.cinco === "X" &&
      marcacao.nove === "X"
    ) {
      return setGanhador({
        ganhador: "X ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.tres === "B" &&
      marcacao.cinco === "B" &&
      marcacao.sete === "B"
    ) {
      return setGanhador({
        ganhador: "O ganhou!",
        ganhou: true,
      });
    }

    if (
      marcacao.tres === "X" &&
      marcacao.cinco === "X" &&
      marcacao.sete === "X"
    ) {
      return setGanhador({
        ganhador: "X ganhou!",
        ganhou: true,
      });
    }



    if(marcacao.um !== "V" && marcacao.dois !== "V" && marcacao.tres !== "V" &&
        marcacao.quatro !== "V" && marcacao.cinco !== "V" && marcacao.seis !== "V" &&
        marcacao.sete !== "V" && marcacao.oito !== "V" && marcacao.nove !== "V"
    ) {
        return setGanhador({
            ganhador: "Deu velha!",
            ganhou: true,
          });
    }
  }, [marcacao]);


  // condição de renderização de componentes em tela;
  if (ganhador.ganhou) {
    return (
      <Container>
        <VencedorVelha>{ganhador.ganhador}</VencedorVelha>
        <Restartar onPress={jogarNovamente}>
            <TextRestart>Jogar Novamente!</TextRestart>
        </Restartar>
      </Container>
    );
  }

  return (
    <Container>
      <QualVez>{vez === true ? "Vez do X" : "Vez do O"}</QualVez>
      <Tabela>
        <CasasJogos onPress={() => alterarMarcacao("um")}>
          <BolaOuX>{qualEValor(marcacao.um)}</BolaOuX>
        </CasasJogos>

        <CasasJogos onPress={() => alterarMarcacao("dois")}>
          <BolaOuX>{qualEValor(marcacao.dois)}</BolaOuX>
        </CasasJogos>

        <CasasJogos onPress={() => alterarMarcacao("tres")}>
          <BolaOuX>{qualEValor(marcacao.tres)}</BolaOuX>
        </CasasJogos>

        <CasasJogos onPress={() => alterarMarcacao("quatro")}>
          <BolaOuX>{qualEValor(marcacao.quatro)}</BolaOuX>
        </CasasJogos>

        <CasasJogos onPress={() => alterarMarcacao("cinco")}>
          <BolaOuX>{qualEValor(marcacao.cinco)}</BolaOuX>
        </CasasJogos>

        <CasasJogos onPress={() => alterarMarcacao("seis")}>
          <BolaOuX>{qualEValor(marcacao.seis)}</BolaOuX>
        </CasasJogos>

        <CasasJogos onPress={() => alterarMarcacao("sete")}>
          <BolaOuX>{qualEValor(marcacao.sete)}</BolaOuX>
        </CasasJogos>

        <CasasJogos onPress={() => alterarMarcacao("oito")}>
          <BolaOuX>{qualEValor(marcacao.oito)}</BolaOuX>
        </CasasJogos>

        <CasasJogos onPress={() => alterarMarcacao("nove")}>
          <BolaOuX>{qualEValor(marcacao.nove)}</BolaOuX>
        </CasasJogos>
      </Tabela>
    </Container>
  );
}

export default Jogo;
