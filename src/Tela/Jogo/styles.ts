import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
`;

export const QualVez = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 24px;
`;

export const Tabela = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const CasasJogos = styled.TouchableOpacity`
    margin: 2px;
    padding: 30px;
    background-color: #c3c3c3;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #fff;
`;

export const TextRestart = styled.Text`
    font-weight: bold;
    color: blueviolet;
    font-size: 16px;
`;

export const Restartar = styled.TouchableOpacity`
    background-color: #fff;
    padding: 24px;
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const BolaOuX = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: blueviolet;
`;

export const VencedorVelha = styled.Text`
    margin-bottom: 20px;
    font-weight: bold;
    color: #fff;
    font-size: 30px;
`;