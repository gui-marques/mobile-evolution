import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';


const ModalPiker: React.FC = () => {
  const options = ['Em andamento', 'Concluido', 'Cancelado'];
  return (
    <Container
      visible={true}
      //transparent={true}
      animationType='fade'
    >
      <Text >{options}</Text>
    </Container>
  );
}


export default ModalPiker;
