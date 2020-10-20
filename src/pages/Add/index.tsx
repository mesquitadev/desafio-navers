import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {useNavigation} from '@react-navigation/native';
import {PrimaryText} from '../../styles';
import {Input, Button} from '../../components';
import {Container, HeaderBox} from './styles';

const Add: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <HeaderBox>
            <PrimaryText fontSize={22}>Adicionar Naver</PrimaryText>
          </HeaderBox>
          <Form>
            <Container>
              <PrimaryText fontSize={14} alignSelf="flex-start">
                Nome
              </PrimaryText>

              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="name"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {}}
              />
              <PrimaryText fontSize={14} alignSelf="flex-start">
                Cargo
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
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {}}
              />
              <Button
                onPress={() => {
                  // formRef.current?.submitForm();
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

export default Add;
