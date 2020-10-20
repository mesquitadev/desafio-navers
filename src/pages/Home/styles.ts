import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Container = styled.View`
  flex: 1;
  padding-top: 28px;
  margin: 0px 16px;
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
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8px;
  justify-content: flex-start;
  align-self: flex-start;
  width: 156px;
  height: 60px;
`;

export const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 106,
  },
});
