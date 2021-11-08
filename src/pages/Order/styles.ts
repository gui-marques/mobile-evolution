import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { getBottomSpace } from 'react-native-iphone-x-helper';


export const Container = styled.View`
flex: 1;
`
export const Header = styled.View`
padding: 24px;
background: #28262e;
padding-top: ${getStatusBarHeight() + 24}px;

flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const HeaderTitle = styled.Text`
color: #f4ede8;
font-size: 20px;
font-family: 'RobotoSlab-Regular';
line-height: 28px;

`
export const UserName = styled.Text`
color: #ff9000;
font-family: 'RobotoSlab-Bold';

`
export const ProfileButton = styled.TouchableOpacity`
`
export const UserAvatar = styled.Image`
width: 70px;
height: 70px;
border-radius: 35px;
`
export const NewOrder = styled.View`
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
export const Main = styled.View`
width: 100%;
height: 100%;
background-color: #0a0b0d;

`

export const NewOrderText = styled.TouchableOpacity`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 20px;

  align-items: center;
`;
export const Text2 = styled.Text`
color: #fff;
font-size: 19px;
align-items: center;
justify-content: center;
font-family: 'RobotoSlab-Regular';
`

// AQUI COMEÇA O ESTILO DA PAGE NewOrder

export const ContainerMain = styled.View`
background-color: #33363b;
width: 100%;
height: 100%;
padding: 10px;
flex: 1;


`
export const ContainerLado = styled.View`
flex-direction: row;
width: 80%;
margin-bottom: 60px;

`

export const HeaderNew = styled.View`
padding: 14px;
background: #00CDCD;


flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const HeaderTitleNew = styled.Text`
padding: 12px;
color: #f4ede8;
font-size: 25px;
font-family: 'RobotoSlab-Bold';
`
export const Text3 = styled.Text`
margin-bottom: 50px;
`


export const Input = styled.TextInput`
background-color: #f4ede8;
width: 100%;
height: 40px;
border-radius: 10px;
margin-bottom: 20px;

`


