import styled from 'styled-components/native';
import {StyleSheet, FlatList} from 'react-native';
import {Naver} from '.';
export const Container = styled.View`
  flex: 1;
  padding-top: 28px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 28px;
`;

export const DetailsContainer = styled.View`
  height: 234px;
`;

export const AvatarContainer = styled.TouchableOpacity`
  width: 156px;
  height: 156px;
`;
export const Avatar = styled.Image`
  width: 156px;
  height: 156px;
`;
export const ActionsContainer = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
`;

export const InfoContainer = styled.View`
  margin-top: 8px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 155px;
  height: 60px;
`;

export const DetailsList = styled(FlatList as new () => FlatList<Naver>).attrs({
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
})``;

export const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 106,
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
