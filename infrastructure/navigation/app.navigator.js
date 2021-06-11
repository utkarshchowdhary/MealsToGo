import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsContextProvider } from '../../src/services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../src/services/location/location.context';
import { FavouritesContextProvider } from '../../src/services/favourites/favourites.context';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../src/screens/map.screen';
import { SettingsNavigator } from './settings.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={{
            activeTintColor: '#ff8a5b',
            inactiveTintColor: '#708d81',
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
