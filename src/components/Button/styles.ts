import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background-color: #5F9EA0;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Bold';
  color: #fff;
  font-size: 22px;
`;

//AQUI É A ESTILIZAÇÃO DO BUTTON PADRÃO (VOLTAR, CONFIRMAR ETC...)

export const ContainerPadrao = styled(RectButton)`
  width: 40%;
  height: 50px;
  background-color: #FF6347;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonTextPadrao = styled.Text`
  font-family: 'RobotoSlab-Bold';
  color: #fff;
  font-size: 22px;
`;
