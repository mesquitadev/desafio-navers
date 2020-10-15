import React, {useCallback, useRef} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {Container, styles} from './styles';
import {Input, Button} from '../../components';
import {PrimaryText} from '../../styles';

import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback((data: object) => {
    console.log('data', data);
  }, []);

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
          <Form onSubmit={handleSignIn} ref={formRef}>
            <Container>
              <PrimaryText fontSize={14} alignSelf="flex-start">
                E-mail
              </PrimaryText>

              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {}}
              />
              <PrimaryText fontSize={14} alignSelf="flex-start">
                Senha
              </PrimaryText>
              <Input
                ref={passwordInputRef}
                secureTextEntry
                returnKeyType="send"
                name="password"
                placeholder="Senha"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Entrar
              </Button>
            </Container>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
