import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding: 0 16px;
  background-color: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px ;
  border-color:  #232129;

  flex-direction: row;
  align-items: center;

  ${props => props.isErrored && css`
  border-color: #c53030;
  `}

  ${props => props.isFocused && css`
  border-color: #5F9EA0;
  `}
`;


export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;
