import React, {useCallback, useRef, useState, useEffect} from 'react';
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
import {useRoute, useNavigation} from '@react-navigation/native';

interface FormData {
  name: string;
  jobRole: string;
  birthdate: string;
  admissionDate: string;
  project: string;
  url: string;
}
interface RouteParams {
  naverId: string;
}

const Edit: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const route = useRoute();

  const admissionDateRef = useRef<TextInput>(null);
  const jobRoleRef = useRef<TextInput>(null);
  const birthdateRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);
  const urlRef = useRef<TextInput>(null);
  const projectRef = useRef<TextInput>(null);

  const params = route.params as RouteParams;

  const [selectedNaver, setSelectedNaver] = useState<string>(params.naverId);

  useEffect(() => {
    api.get(`/navers/${selectedNaver}`).then((response) => {
      setSelectedNaver(response.data);
    });
  }, [selectedNaver]);

  const handleSave = useCallback(async (data: FormData) => {
    console.log('data', data);
    try {
      formRef.current?.setErrors({});
      await api.put(`/navers/${params.naverId}`, data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log('erro', err);
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro ao salvar',
        'Ocorreu um erro ao salvar, verifique os dados inseridos.',
      );
      navigation.goBack();
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
            <PrimaryText fontSize={22}>Editar Naver</PrimaryText>
          </HeaderBox>
          <Form
            initialData={{
              name: selectedNaver.name,
              job_role: selectedNaver.job_role,
              birthdate: selectedNaver.birthdate,
              admission_date: selectedNaver.admission_date,
              project: selectedNaver.project,
              url: selectedNaver.url,
            }}
            onSubmit={handleSave}
            ref={formRef}>
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

export default Edit;
