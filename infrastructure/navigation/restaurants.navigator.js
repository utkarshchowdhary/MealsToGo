import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../src/screens/restaurants.screen';
import { RestaurantDetailScreen } from '../../src/screens/restaurant-detail.screen';

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator headerMode="none">
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
