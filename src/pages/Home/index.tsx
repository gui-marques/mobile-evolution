import React from 'react';
import  Banner  from '../../components/Banner';
import {useAuth} from '../../hooks/auth';

import { ContainerPrincipal, BackgroundStart, Text, Card, Scroll, Painel, Navegacao, Text2 } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


const Home: React.FC = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();
  return (
    <ContainerPrincipal>
      <Banner></Banner>
       <Scroll>
      <BackgroundStart>

         <Card onPress={()=> navigation.navigate('Order')}>
          <Icon name="file-text" size={40} color="#eeecea" />
            <Text>Ordem</Text>
            <Text>de</Text>
            <Text>Serviço</Text>
          </Card>

          <Card>
          <Icon name="message-square" size={40} color="#eeecea" />
            <Text>Chat</Text>
          </Card>



          <Card>
          <Icon name="user" size={40} color="#eeecea" />
            <Text>Perfil</Text>
          </Card>

          <Card>
          <Icon name="layers" size={40} color="#eeecea" />
            <Text>Ticket</Text>
          </Card>




      </BackgroundStart>
      </Scroll>
      <Painel>
          <Navegacao>
            <Icon name="home" size={30} color="#fff" />
            <Text2>Home</Text2>
          </Navegacao>

          <Navegacao>
            <Icon name="user"  size={30} color="#fff" />
            <Text2>Perfil</Text2>
            </Navegacao>

            <Navegacao>
            <Icon name="settings" size={30} color="#fff" />
            <Text2>Settings</Text2>
            </Navegacao>

            <Navegacao onPress={signOut}>
            <Icon name="log-out" size={30} color="#fff" />
            <Text2>Exit</Text2>
            </Navegacao>


          </Painel>
    </ContainerPrincipal>
  )
}

export default Home;
