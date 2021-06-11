import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import { AuthenticationContext } from '../services/authentication/authentication.context';
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

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${({ theme }) => theme.space[2]};
`;

export const AccountScreen = ({ navigation }) => {
  const { isLoading } = useContext(AuthenticationContext);

  return (
    <BgImage>
      <BgImageCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../assets/watermelon.json')}
        />
      </AnimationWrapper>
      <TitleContainer>
        <Text variant="title">Meals To Go</Text>
      </TitleContainer>
      {!isLoading ? (
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
      ) : (
        <ActivityIndicator size={36} animating={true} color="#ff8a5b" />
      )}
    </BgImage>
  );
};
