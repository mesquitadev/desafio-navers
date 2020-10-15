import styled, {css} from 'styled-components/native';

interface Container {
  isFocused?: boolean;
}

export const Container = styled.View<Container>`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background: #ffffff;
  margin-bottom: 30px;
  border-width: 1px;
  border-color: #424241;

  ${(props) =>
    props.isFocused &&
    css`
      border-width: 2px;
      border-color: #424242;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #424242;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
`;
