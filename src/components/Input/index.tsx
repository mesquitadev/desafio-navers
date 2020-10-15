import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => (
  <Container>
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#9E9E9E"
      {...rest}
    />
  </Container>
);

export default Input;
