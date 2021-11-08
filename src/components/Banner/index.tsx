import { isTemplateElement } from '@babel/types';
import React from 'react';
import { View,  } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


import { Container, Image } from './styles';





const screens = [
 {
  key: '1',
  title: 'Bem vindos viados',
  text: 'Testando 123',
  Image: require('../../assets/1.png'),
  backgroundColor: '#22bcb5'
},
{
  key: '2',
  title: 'Olá dnv',
  text: 'Testando 321',
  Image: require('../../assets/2.png'),
  backgroundColor: '#22bcb5'
},
{
  key: '3',
  title: 'Olá novamente',
  text: 'aproveitando novamente',
  Image: require('../../assets/3.png'),
  backgroundColor: '#22bcb5'
}

]

const Banner: React.FC = () => {

function renderScreens({item}){
  return(
    <View style={{
      flex:1
    }}>
    <Image
    source={item.Image}
    style={{
      resizeMode: 'cover'
    }}

    />

    </View>
    )
}
  return(

  <Container>
      <AppIntroSlider
      renderItem={renderScreens}
      data={screens}
      activeDotStyle={{backgroundColor:'#009CFF', width: 30 }}
      showNextButton = {false}
      showDoneButton = {false}
      showPrevButton = {false}
      />



  </Container>

  )
}

export default Banner;
