import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Input = styled(TextInput)`
  margin-bottom: ${({ theme }) => theme.space[3]};
`;
