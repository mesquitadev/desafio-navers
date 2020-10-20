import React from 'react';
import {Button} from '../../components';
import {PrimaryText, SecondaryText} from '../../styles';

import {
  Container,
  AvatarContainer,
  Avatar,
  ContainerInfo,
  ActionsContainer,
} from './styles';
import user from '../../assets/user.png';

const Details: React.FC = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={user} />
      </AvatarContainer>
      <ContainerInfo>
        <PrimaryText fontSize={22}>Juliano Reis</PrimaryText>
        <SecondaryText fontSize={16}>Front-End Developer</SecondaryText>
        <PrimaryText fontSize={22}>Idade</PrimaryText>
        <SecondaryText fontSize={16}>23</SecondaryText>
        <PrimaryText fontSize={22}>Tempo de Empresa</PrimaryText>
        <SecondaryText fontSize={16}>+ 2 Anos</SecondaryText>
        <PrimaryText fontSize={22}>Projetos que Participou</PrimaryText>
        <SecondaryText fontSize={16}>Front-End Developer</SecondaryText>
        <ActionsContainer>
          <Button>Excluir</Button>
          <Button>Excluir</Button>
        </ActionsContainer>
      </ContainerInfo>
    </Container>
  );
};

export default Details;
