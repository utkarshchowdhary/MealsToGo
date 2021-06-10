import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

export const Btn = styled(Button).attrs({
  color: colors.brand.primary,
})`
  margin-top: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[1]};
`;
