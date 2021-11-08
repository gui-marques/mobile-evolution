import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { ContainerPadrao, ButtonTextPadrao } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ContainerPadrao {...rest}>
    <ButtonTextPadrao>{children}</ButtonTextPadrao>
  </ContainerPadrao>
);

export default Button;
