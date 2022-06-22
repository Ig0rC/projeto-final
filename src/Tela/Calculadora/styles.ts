import styled from 'styled-components/native';


export const Visor = styled.Text`
    padding: 50px 0px;
    flex: 1;
    font-size: 22px;
    text-align: right;
`;

export const Container = styled.View`
    display: flex;
    flex: 1;
    justify-content: space-around;
`

export const Funcionalidades = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 2;
    justify-content: flex-end;

`

export const ColumnLeft = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 3;
`;

export const ColumnRight = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 6px;
    width: 100%;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 4px;
    text-align: center;
    background-color: blueviolet;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
    padding: 21px;
`;

export const Text = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
`;