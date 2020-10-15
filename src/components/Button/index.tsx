import React from 'react';
import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import {Container} from './styles';
import {PrimaryText} from '../../styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container {...rest}>
    <PrimaryText color={'#fff'}>{children}</PrimaryText>
  </Container>
);

export default Button;
