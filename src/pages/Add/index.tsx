import React, {useCallback, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import {PrimaryText} from '../../styles';
import {Input, Button} from '../../components';
import {Container, HeaderBox} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

interface FormData {
  name: string;
  jobRole: string;
  birthdate: string;
  admissionDate: string;
  project: string;
  url: string;
}

const Add: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const admissionDateRef = useRef<TextInput>(null);
  const jobRoleRef = useRef<TextInput>(null);
  const birthdateRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);
  const urlRef = useRef<TextInput>(null);
  const projectRef = useRef<TextInput>(null);

  const handleSave = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({});

      console.log('data', data);
      await api.post('/navers', data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro ao salvar',
        'Ocorreu um erro ao salvar, verifique os dados inseridos.',
      );
    }
  }, []);
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView keyboardShouldPersistTaps="handled">
          <HeaderBox>
            <PrimaryText fontSize={22}>Adicionar Naver</PrimaryText>
          </HeaderBox>
          <Form onSubmit={handleSave} ref={formRef}>
            <Container>
              <PrimaryText fontSize={14} alignSelf="flex-start">
                Nome
              </PrimaryText>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="name"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => nameRef.current?.focus()}
              />
              <PrimaryText fontSize={14} alignSelf="flex-start">
                Cargo
              </PrimaryText>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="job_role"
                placeholder="Cargo"
                returnKeyType="next"
                onSubmitEditing={() => jobRoleRef.current?.focus()}
              />
              <PrimaryText fontSize={14} alignSelf="flex-start">
                Data de Nascimento
              </PrimaryText>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="birthdate"
                placeholder="00/00/0000"
                returnKeyType="next"
                onSubmitEditing={() => birthdateRef.current?.focus()}
              />
              <PrimaryText fontSize={14} alignSelf="flex-start">
                Data de Admissao
              </PrimaryText>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="admission_date"
                placeholder="00/00/0000"
                returnKeyType="next"
                onSubmitEditing={() => admissionDateRef.current?.focus()}
              />
              <PrimaryText fontSize={14} alignSelf="flex-start">
                Projetos que Participou
              </PrimaryText>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="project"
                placeholder="Projetos"
                returnKeyType="next"
                onSubmitEditing={() => projectRef.current?.focus()}
              />
              <PrimaryText fontSize={14} alignSelf="flex-start">
                URL da Foto do Naver
              </PrimaryText>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="url"
                placeholder="Url da Foto do Naver"
                onSubmitEditing={() => urlRef.current?.focus()}
                returnKeyType="send"
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Salvar
              </Button>
            </Container>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Add;
