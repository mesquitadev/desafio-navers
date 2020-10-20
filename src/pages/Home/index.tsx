import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  Wrapper,
  Details,
  DetailsContainer,
  AvatarContainer,
  Avatar,
  InfoContainer,
  ActionsContainer,
} from './styles';
import {Button} from '../../components';
import {PrimaryText, SecondaryText} from '../../styles';

import user from '../../assets/user.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <Wrapper>
          <PrimaryText fontSize={22}>Navers</PrimaryText>
          <Button
            style={{width: 155}}
            onPress={() => navigation.navigate('Add')}>
            Adicionar Naver
          </Button>
        </Wrapper>
        <Details>
          <DetailsContainer>
            <AvatarContainer onPress={() => navigation.navigate('Details')}>
              <Avatar source={user} />
            </AvatarContainer>
            <InfoContainer>
              <PrimaryText>Victor Mesquita</PrimaryText>
              <SecondaryText>Full-Stack Developer</SecondaryText>
              <ActionsContainer>
                <FeatherIcon name="trash" color="#000" size={18} />
                <FeatherIcon name="edit" color="#000" size={18} />
              </ActionsContainer>
            </InfoContainer>
          </DetailsContainer>
        </Details>
      </Container>
    </ScrollView>
  );
};

export default Home;
