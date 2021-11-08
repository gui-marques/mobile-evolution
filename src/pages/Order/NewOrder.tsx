import React, { useCallback, useRef } from 'react';
import { useNavigation } from "@react-navigation/core";
import {
  ScrollView,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import ButtonPadrao from '../../components/Button/padrao';
import Button from '../../components/Button';

import {
  Container,
  HeaderNew,
  HeaderTitleNew,
  Main,
  ContainerMain

} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { Text2 } from '../Home/styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input'

import TextArea from '../../components/Form/textarea';


const NewOrder: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const descriptionRef = useRef<TextInput>(null)

  const navigation = useNavigation();

  const onSubmit = useCallback(() => {

  }, [])



  return (
    <>

      <Container >
        <HeaderNew>
          <HeaderTitleNew>
            <Icon name="file-text" size={40} color="#eeecea" />Criar Nova OS
          </HeaderTitleNew>
          <ButtonPadrao onPress={() => navigation.goBack()}>Voltar</ButtonPadrao>
        </HeaderNew>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
          // contentContainerStyle={{ flex: 1 }}

          >
            <Main>
              <ContainerMain>
                <Form ref={formRef} onSubmit={onSubmit}>
                  <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Text2>Cliente* </Text2>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      keyboardType="default"
                      name="cliente"
                      icon="user"
                      placeholder="Insira o Cliente"
                      returnKeyType="next"

                    />
                    <Text2>Equipamento*</Text2>
                    <Text2>Setor*</Text2>
                    <Text2>Status*</Text2>
                  </View>
                  <View>
                    <Text2 style={{ marginBottom: 10 }}>Descrição* </Text2>

                    <TextArea

                      autoCorrect={false}
                      keyboardType="default"
                      placeholder="Adicionar descrição"
                      numberOfLines={5}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        descriptionRef.current?.focus();
                      }}
                    />
                  </View>

                  <View>
                    <Text2 style={{ marginTop: 10, marginBottom: 10 }}>Observação* </Text2>

                    <TextArea
                      autoCorrect={false}
                      keyboardType="default"
                      placeholder="Adicionar descrição"
                      numberOfLines={5}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        descriptionRef.current?.focus();
                      }}
                    />
                  </View>
                </Form>
                <Button
                  onPress={() => formRef.current?.submitForm()}
                >
                  Solicitar
                </Button>
              </ContainerMain>


            </Main>
          </ScrollView>
        </KeyboardAvoidingView>

      </Container>

    </>
  )
}


export default NewOrder;
