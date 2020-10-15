import React, {useCallback, useRef} from 'react';
import {Image, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {Container, styles} from './styles';
import {Input, Button} from '../../components';
import {PrimaryText} from '../../styles';

import logo from '../../assets/logo.png';

const AddNaver: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

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
                E-maild
              </PrimaryText>
              <Input name="email" placeholder="E-mail" />
              <PrimaryText fontSize={14} alignSelf="flex-start">
                Senha
              </PrimaryText>
              <Input name="password" placeholder="Senha" />
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

export default AddNaver;
