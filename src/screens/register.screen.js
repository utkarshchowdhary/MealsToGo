import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';

const ErrorContainer = styled.View`
  align-self: center;
`;

const TitleContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

import { AuthenticationContext } from '../services/authentication/authentication.context';
import {
  BgImage,
  BgImageCover,
  BgImageContentContainer,
} from '../components/utility/bg-image.component';
import { Btn } from '../components/utility/button.component';
import { Input } from '../components/utility/Input.component';
import { Text } from '../components/typography/text.component';

export const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const { isLoading, onRegister, error } = useContext(AuthenticationContext);

  return (
    <BgImage>
      <BgImageCover />
      <TitleContainer>
        <Text variant="title">Meals To Go</Text>
      </TitleContainer>
      <BgImageContentContainer>
        <Input
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setRepeatedPassword(text)}
        />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <Btn
            icon="email"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </Btn>
        ) : (
          <ActivityIndicator animating={true} color="#ff8a5b" />
        )}
      </BgImageContentContainer>
    </BgImage>
  );
};
