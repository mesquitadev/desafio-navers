import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {useRoute, useNavigation} from '@react-navigation/native';
const moment = require('moment');
import {Button} from '../../components';
import {PrimaryText, SecondaryText} from '../../styles';

import {
  Container,
  AvatarContainer,
  Avatar,
  ContainerInfo,
  ActionsContainer,
} from './styles';

interface RouteParams {
  naverId: string;
}

const Details: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params as RouteParams;

  const [selectedNaver, setSelectedNaver] = useState<string>(params.naverId);

  useEffect(() => {
    api.get(`/navers/${selectedNaver}`).then((response) => {
      setSelectedNaver(response.data);
    });
  }, [selectedNaver]);

  return (
    <Container>
      <AvatarContainer>
        <Avatar source={{uri: selectedNaver.url}} />
      </AvatarContainer>
      <ContainerInfo>
        <PrimaryText fontSize={22}>{selectedNaver.name}</PrimaryText>
        <SecondaryText fontSize={16}>{selectedNaver.job_role}</SecondaryText>
        <PrimaryText fontSize={22}>Idade</PrimaryText>
        <SecondaryText fontSize={16}>
          {moment(new Date(selectedNaver.birthdate)).years()} anos
        </SecondaryText>
        <PrimaryText fontSize={22}>Tempo de Empresa</PrimaryText>
        <SecondaryText fontSize={16}>
          {moment(new Date(selectedNaver.admission_date)).days()} anos
        </SecondaryText>
        <PrimaryText fontSize={22}>Projetos que Participou</PrimaryText>
        <SecondaryText fontSize={16}>{selectedNaver.project}</SecondaryText>
        <ActionsContainer>
          <Button>Excluir</Button>
          <Button>Excluir</Button>
        </ActionsContainer>
      </ContainerInfo>
    </Container>
  );
};

export default Details;
