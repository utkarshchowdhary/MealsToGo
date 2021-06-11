import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsScreen } from '../../src/screens/settings.screen';
import { FavouritesScreen } from '../../src/screens/favourites.screen';

const Stack = createStackNavigator();

export const SettingsNavigator = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      options={{
        header: () => null,
      }}
      name="Settings"
      component={SettingsScreen}
    />
    <Stack.Screen name="Favourites" component={FavouritesScreen} />
  </Stack.Navigator>
);
