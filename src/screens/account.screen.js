import React from 'react';
import styled from 'styled-components/native';

import {
  BgImage,
  BgImageCover,
  BgImageContentContainer,
} from '../components/utility/bg-image.component';
import { Btn } from '../components/utility/button.component';
import { Text } from '../components/typography/text.component';

const TitleContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

export const AccountScreen = ({ navigation }) => (
  <BgImage>
    <BgImageCover />
    <TitleContainer>
      <Text variant="title">Meals To Go</Text>
    </TitleContainer>
    <BgImageContentContainer>
      <Btn
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </Btn>
      <Btn
        icon="email"
        mode="contained"
        onPress={() => navigation.navigate('Register')}
      >
        Register
      </Btn>
    </BgImageContentContainer>
  </BgImage>
);
