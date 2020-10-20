import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
`;
export const AvatarContainer = styled.View`
  background: black;
  width: 100%;
  height: 300px;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 8px;
  justify-content: flex-start;
  align-self: flex-start;
  width: 300px;
  height: 60px;
  padding: 0 18px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
