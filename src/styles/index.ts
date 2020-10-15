import styled from 'styled-components/native';

interface PrimaryText {
  color?: string;
  fontSize?: number;
  alignSelf?: string;
}
export const PrimaryText = styled.Text<PrimaryText>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : 16)}px;
  color: ${(props) => (props.color ? props.color : '#212121')};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'center')};
  font-family: 'Montserrat-SemiBold';
`;

interface SecondaryText {
  color?: string;
  alignSelf?: string;
}
export const SecondaryText = styled.Text<SecondaryText>`
  font-size: 14px;
  font-family: 'Montserrat-Bold';
  color: ${(props) => (props.color ? props.color : '#212121')};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'center')};
`;
