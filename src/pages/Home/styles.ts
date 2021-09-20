import styled from "styled-components/native";

export const ContainerPrincipal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background-color: #a6b3bf;
`;
export const BackgroundStart = styled.View`
        background-color: #a6b3bf;
        width: 100%;
        height: 70%;
        background-color: #a6b3bf;
        top: 70px;
        padding: 2px;
        display: flex;

`
export const Scroll = styled.ScrollView`
  flex: 1;




`
export const Card = styled.TouchableOpacity`
padding: 10px;
width: 120px;
height: 120px;
background-color: #047ec9;
margin-bottom: 20px;
align-items: center;
justify-content: center;
border-radius: 40px;
`

export const Text = styled.Text`
color:  #fff;;
font-size: 18px;
align-items: center;
justify-content: center;
font-family: 'RobotoSlab-Regular';
`
export const Painel = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #006dd4;
  border-width: 1px;
  border-color:  #047ec9;
  height: 9%;

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

