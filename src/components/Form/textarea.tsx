import React, { useCallback, useRef, useState } from 'react';
import { TextInputProps } from 'react-native'

import { Container, TextInput } from './styles';


interface InputValueReference {
  value: string;
}

const TextArea: React.FC<TextInputProps> = ({ defaultValue, ...rest }) => {
  const inputElementRef = useRef<any>(null);


  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsfilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsfilled(!!inputElementRef.current.value);
  }, [])

  return (
    <Container isFocused={isFocused}>
      <TextInput
        ref={inputElementRef}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        multiline={true}
        numberOfLines={10}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={{ textAlignVertical: "top", width: "100%" }}
        placeholderTextColor="#919191"
        {...rest}
      />
    </Container>
  );
}

export default TextArea;
