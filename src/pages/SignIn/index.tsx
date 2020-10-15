import React from 'react';
import {Image, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {Container, styles} from './styles';
import {Input, Button} from '../../components';
import {PrimaryText} from '../../styles';

import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Image style={styles.logo} source={logo} width={156} height={40} />
          <Container>
            <PrimaryText fontSize={14} alignSelf="flex-start">
              E-mail
            </PrimaryText>
            <Input name="email" placeholder="E-mail" />
            <PrimaryText fontSize={14} alignSelf="flex-start">
              Senha
            </PrimaryText>
            <Input name="password" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log('oka');
              }}>
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
