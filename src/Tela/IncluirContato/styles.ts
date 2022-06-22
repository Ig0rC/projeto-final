import styled from 'styled-components/native';


export const Label = styled.Text`
    font-size: 16px;
    color: blueviolet;
    margin: 0px 4px;
    font-weight: bold;
`;

export const Input = styled.TextInput`
    padding: 8px;
    border-bottom-width: 2px;
    margin: 4px;
    border-color: blueviolet;
    background-color: #fff;
    border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
    background-color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 4px;
    border-radius: 4px;
`

export const TextButton = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;