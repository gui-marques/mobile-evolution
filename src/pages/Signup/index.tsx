import React, {useRef, useCallback} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Alert,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import {
  Container,
  BackToSigninText,
  BackToSignin,
} from './styles';


interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const phonelInputRef = useRef<TextInput>(null);
  const tecnicoInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          //name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          // password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
          console.log(data);
        await api.post('/usuarios/psolacessoos', data);

        Alert.alert(
          'Solicitação realizada com sucesso!',
          'O retorno será por email. Verifique sua caixa postal',
        );

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente.',
        );
      }
    },
    [],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image style={{ maxWidth: 200, maxHeight: 150, marginBottom: 20 }} source={logoImg} />

          <Form ref={formRef} onSubmit={handleSignUp}>
          <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />

              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  phonelInputRef.current?.focus();
                }}
              />
              <Input
                ref={phonelInputRef}
                keyboardType="phone-pad"
                autoCorrect={false}
                autoCapitalize="none"
                name="phone"
                icon="phone"
                placeholder="Telefone"
                returnKeyType="next"
                onSubmitEditing={() => {
                  tecnicoInputRef.current?.focus();
                }}
              />
              <Input
                ref={tecnicoInputRef}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                name="perfil"
                icon="user"
                placeholder="1 para tecnico 2 para vendedor"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
          </Form>
          <Button
            onPress={() =>  formRef.current?.submitForm()}
          >
            Solicitar
          </Button>

          <BackToSignin
            onPress={() => navigation.goBack() }
          >
            <Icon name="arrow-left" size={20} color="#fff"/>
            <BackToSigninText>Voltar para o Acesso</BackToSigninText>
          </BackToSignin>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
