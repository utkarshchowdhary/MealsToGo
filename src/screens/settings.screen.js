import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { List, Avatar } from 'react-native-paper';

import { SafeArea } from '../components/utility/safe-area.component';
import { AuthenticationContext } from '../services/authentication/authentication.context';
import { Text } from '../components/typography/text.component';

const InfoContainer = styled.View`
  padding: ${({ theme }) => `${theme.space[3]} 0 ${theme.space[2]}`};
  align-items: center;
`;

const TextContainer = styled.View`
  padding: ${({ theme }) => theme.space[2]};
`;

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <InfoContainer>
        <Avatar.Icon size={160} icon="human" backgroundColor="#ff8a5b" />
        <TextContainer>
          <Text>{user.email}</Text>
        </TextContainer>
      </InfoContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
