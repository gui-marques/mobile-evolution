import { useNavigation } from "@react-navigation/core";
import React, { useCallback } from "react";
import { useNavigationState } from "@react-navigation/core";
import { Container, Header, HeaderTitle, UserName, ProfileButton, UserAvatar, NewOrder,NewOrderText, Text2, Main } from "./styles";
import Icon from 'react-native-vector-icons/Feather';


const Order: React.FC = () => {
  const navigation = useNavigation();
  const {navigate} = useNavigation();
  const navigateToProfile = useCallback(()=>{
    navigate('Profile');
  }, [navigate]);
return(
  <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {"\n"}
          <UserName>Guilherme Silva</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
           <UserAvatar source={{uri: 'https://s3-us-west-2.amazonaws.com/files.erp.com.br/Producao/ed7ab72a-bfae-4641-9687-76a951d9b7a3/FotoUsuario/981983bf-5da9-415c-9e2a-968b4739a327_139x139.jpeg?v=200421141212'}} />
        </ProfileButton>
      </Header>
      <Main>
        <Text2>Olá</Text2>
        </Main>

      <NewOrder>
      <NewOrderText onPress={() => navigation.goBack() }>
            <Icon name="arrow-left"  size={30} color="#fff" />
            <Text2>Voltar</Text2>
            </NewOrderText>

          <NewOrderText onPress={() => navigation.navigate('NewOrder')}>
            <Icon name="file-plus" size={30} color="#fff" />
            <Text2>Nova Ordem</Text2>
          </NewOrderText>
          </NewOrder>


  </Container>
)
}

export default Order;
