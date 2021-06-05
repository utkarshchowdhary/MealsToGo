import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

export const RestaurantCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Section = styled.View`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[0]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const SectionEnd = styled.View`
  flex: 0.25;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
