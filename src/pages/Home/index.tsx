import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { ContainerPrincipal, BackgroundStart, Text, Card, Scroll, Painel, Navegacao } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ContainerPrincipal>
      <BackgroundStart>
        <Scroll>
          {/* <Card onPress={()=> navigation.navigate('Signin')}> */}
          <Card>
          <Icon name="file-text" size={40} color="#eeecea" />
            <Text>Ordem </Text>
            <Text>de</Text>
            <Text>Serviço</Text>
          </Card>
          <Card>
          <Icon name="message-circle" size={40} color="#eeecea" />
            <Text>Chat</Text>
          </Card>

          <Card>
          <Icon name="user" size={40} color="#eeecea" />
            <Text>Perfil</Text>
          </Card>
          <Card>
            <Text>Icon</Text>
            <Text>Chat</Text>
          </Card>
          <Card>
            <Text>Icon</Text>
            <Text>Chat</Text>
          </Card>
        </Scroll>

      </BackgroundStart>
      <Painel>
          <Navegacao>
            <Icon name="home" size={30} color="#fff" />
            <Text>Home</Text>
          </Navegacao>

          <Navegacao>
            <Icon name="user"  size={30} color="#fff" />
            <Text>Perfil</Text>
            </Navegacao>

            <Navegacao>
            <Icon name="settings" size={30} color="#fff" />
            <Text>Settings</Text>
            </Navegacao>

            <Navegacao>
            <Icon name="log-out" size={30} color="#fff" />
            <Text>Exit</Text>
            </Navegacao>


          </Painel>
    </ContainerPrincipal>
  )
}

export default Home;
