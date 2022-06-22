import { useState } from "react";
import { Button, ColumnLeft, ColumnRight,  Container, Funcionalidades, Row, Text, Visor } from "./styles";

function Calculadora() {
    const [calc, setCalc] = useState('');
    const [total, setTotal] = useState('');

    // função tem objetivo de inserir o valor do visor na variavel de estado calc
    function setValue(value: string) {
        // se a condição for verdadeira ela nao inseri o operador depois de outro operador
        if((calc[calc.length - 2] === '/' || calc[calc.length - 2] === 'X' || calc[calc.length - 2] === '-' || calc[calc.length - 2] === '+')
            && (value === 'X' || value === '/' || value === '+' || value === '-')
        ) {
            return;
        }

        // a condição tem objetivo de colocar espaços do operador e o calculo
        if(value === 'X' || value === '/' || value === '+' || value === '-') {
            setCalc((prevState) => `${prevState} ${value} `)
        } else {
            setCalc((prevState) => `${prevState}${value}`)
        }
    }

    // a função tem o objetivo de apagar o ultimo número do visor 
    function backspace() {
        setCalc((prevState) => {
            // prevState é um atributo do useState que conseguimos pegar o valor anterior
            // o metodo substring tem objetivo de corta a string, cortamos sempre o último valor da string
            return prevState.substring(0, prevState.length - 1);
        })
        // setTotal para zera o valor
        setTotal('');
    }

    // a função tem objetivo de apagar todo o visor da calculadora
    function apagarTudo() {
        setCalc('');
        setTotal('');
    }

    // a função tem objetivo de calcular o valor digitado em tela
    function calcular() {
        let values: string = '';
        // a condição tem objetivo de verificar se o ultimo valor digitado é operador ou numero
        // se a condição for verdadeira, apagara o operador
        // apos apagar o valor trocamos o X para * e virgula para pontos, pois o calculo do javascript nao aceita.
        if(calc[calc.length - 2] === '/' || calc[calc.length - 2] === 'X' || calc[calc.length - 2] === '-' || calc[calc.length - 2] === '+') {
            values = calc.substring(0, calc.length - 3)
            setCalc(values);
            values = values.replace(/X/g, '*');
            values = values.replace(/,/g, '.');
        } else {
            values = calc.replace(/X/g, '*');
            values = values.replace(/,/g, '.');
        }
        // Uma sequência de caracteres que representa uma expressão JavaScript, declaração, ou sequência de declarações. A expressão pode incluir variáveis e propriedades de objetos existentes.
        setTotal(eval(values));
    }

    return (
        <Container>
            <Visor>
                {calc}
            </Visor>
            <Visor>
                total {total}
            </Visor>

            <Funcionalidades>
                <ColumnLeft>
                    <Row>
                        <Button onPress={apagarTudo}>
                            <Text>
                                C
                            </Text>
                        </Button>

                        <Button onPress={backspace}>
                            <Text>
                                del
                            </Text>
                        </Button>

                        <Button>
        
                        </Button> 
                    </Row>

                    <Row>
                        <Button onPress={() => setValue('7')}>
                            <Text>
                                7
                            </Text>
                        </Button>
                

                        <Button onPress={() => setValue('8')}>
                            <Text>
                                8
                            </Text>
                        </Button>

                        <Button onPress={() => setValue('9')}>
                            <Text>
                                9
                            </Text>
                        </Button>
                    </Row>
                    
                    <Row>
                         <Button onPress={() => setValue('4')}>
                            <Text>
                                4
                            </Text>
                        </Button>

                         <Button onPress={() => setValue('5')}>
                            <Text>
                                5
                            </Text>
                        </Button>
                        
                         <Button onPress={() => setValue('6')}>
                            <Text>
                                6
                            </Text>
                        </Button>
                    </Row>

                    <Row>
                        <Button onPress={() => setValue('1')}>
                            <Text>
                                1
                            </Text>
                        </Button>
                        <Button onPress={() => setValue('2')}>
                            <Text>
                                2
                            </Text>
                        </Button>
                        <Button onPress={() => setValue('3')}>
                            <Text>
                                3
                            </Text>
                        </Button>
                    </Row>

                    <Row>

                        <Button>
                        </Button>

                        <Button onPress={() => setValue('0')}>
                            <Text>
                                0
                            </Text>
                        </Button>

                        <Button onPress={() => setValue(',')}>
                            <Text>
                                ,
                            </Text>
                        </Button>

                    </Row>

                </ColumnLeft>

                <ColumnRight>
                    <Row>
                         <Button onPress={() => setValue('/')}>
                            <Text>
                                /
                            </Text>
                        </Button>
                    </Row>
                    <Row>
                         <Button onPress={() => setValue('X')}>
                            <Text>
                                x
                            </Text>
                        </Button>
                    </Row>
                    <Row>
                         <Button onPress={() => setValue('-')}>
                            <Text>
                                -
                            </Text>
                        </Button>
                    </Row>
                    <Row>
                         <Button onPress={() => setValue('+')}>
                            <Text>
                                +
                            </Text>
                        </Button>
                    </Row>
                    <Row>
                         <Button onPress={calcular}>
                            <Text>
                            = 
                            </Text>
                        </Button>
                    </Row>
                </ColumnRight>
            </Funcionalidades>
        </Container>
    )
}

export default Calculadora;