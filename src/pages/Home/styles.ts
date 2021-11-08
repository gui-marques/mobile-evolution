import styled from "styled-components/native";
import { getBottomSpace } from 'react-native-iphone-x-helper';


export const ContainerPrincipal = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 36px;
  background-color: #1c1b1b;
`;



export const BackgroundStart = styled.View`
        background-color: #1c1b1b;
        height: 60%;
        width: 100%;
        flex-wrap: wrap;
`
export const Scroll = styled.ScrollView`
        padding: 0 40px;
        top: 250px;
        width: 120%;
        height: 100%
`
export const Card = styled.TouchableOpacity`
padding: 10px;
margin: 20px;
width: 110px;
height: 110px;
background-color: #047ec9;
margin-bottom: 20px;
align-items: center;
justify-content: center;
border-radius: 40px;
`

export const Text = styled.Text`
color:  #fff;;
font-size: 15px;
align-items: center;
justify-content: center;
font-family: 'RobotoSlab-Bold';
`
export const Text2 = styled.Text`
color: #fff;
font-size: 19px;
align-items: center;
justify-content: center;
font-family: 'RobotoSlab-Regular';
`

export const Painel = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #33363b;
  border-width: 1.4px;
  border-color:  #0a0b0d;
  height: 10%;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;
export const Navegacao = styled.TouchableOpacity`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 20px;

  align-items: center;
`;

