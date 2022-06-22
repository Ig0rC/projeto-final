import styled from 'styled-components/native';


export const SafeAreaView = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
`;


export const Pesquisar = styled.TextInput`
    padding: 6px;
    border-bottom-width: 2px;
    margin: 4px;
    border-color: blueviolet;
`;

export const ScrollView = styled.ScrollView``;

export const CardContato = styled.TouchableOpacity`
    border-bottom-width: 1px;
    margin: 4px;
    border-color: #c3c3c3;
    padding: 8px;
`;

export const Incluir = styled.TouchableOpacity`
    background-color: blueviolet;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Mais = styled.Text`
    font-weight: bold;
    font-size: 30px;
    color: #fff;
`;