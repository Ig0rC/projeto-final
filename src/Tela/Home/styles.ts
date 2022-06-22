import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Column = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 6px;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    color: blueviolet;
    font-weight: bold;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 4px;
    padding: 12px;
    text-align: center;
    flex: 1;
    margin: 2px;
    background-color: #fff;
`;

