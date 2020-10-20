import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import {useAuth} from '../../hooks/auth';
import {
  Container,
  Wrapper,
  Details,
  DetailsContainer,
  AvatarContainer,
  Avatar,
  InfoContainer,
  ActionsContainer,
  DetailsList,
  styles,
} from './styles';
import {Button} from '../../components';
import {PrimaryText, SecondaryText} from '../../styles';
export interface Naver {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}
const Home: React.FC = () => {
  const navigation = useNavigation();
  const [navers, setNavers] = useState<Naver[]>([]);

  useEffect(() => {
    api.get('/navers').then((response) => {
      setNavers(response.data);
    });
  }, []);

  const handleSelectProvider = useCallback(
    (naverId: string) => {
      navigation.navigate('Details', {naverId});
    },
    [navigation],
  );

  return (
    <ScrollView>
      <Container>
        <DetailsList
          columnWrapperStyle={styles.column}
          numColumns={2}
          data={navers}
          keyExtractor={(naver) => naver.id}
          ListHeaderComponent={
            <Wrapper>
              <PrimaryText fontSize={22}>Navers</PrimaryText>
              <Button
                style={{width: 155}}
                onPress={() => navigation.navigate('Add')}>
                Adicionar Naver
              </Button>
            </Wrapper>
          }
          renderItem={({item: naver}) => (
            <Details>
              <DetailsContainer>
                <AvatarContainer onPress={() => handleSelectProvider(naver.id)}>
                  <Avatar source={{uri: naver.url}} />
                </AvatarContainer>
                <InfoContainer>
                  <PrimaryText>{naver.name}</PrimaryText>
                  <SecondaryText>{naver.job_role}</SecondaryText>
                  <ActionsContainer>
                    <FeatherIcon name="trash" color="#000" size={18} />
                    <FeatherIcon
                      name="edit"
                      color="#000"
                      size={18}
                      onPress={() => handleSelectProvider(naver.id)}
                    />
                  </ActionsContainer>
                </InfoContainer>
              </DetailsContainer>
            </Details>
          )}
        />
      </Container>
    </ScrollView>
  );
};

export default Home;
