import React from 'react';
import { Searchbar } from 'react-native-paper';

import { SafeArea } from '../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

import { SearchContainer, RestaurantList } from './restaurants.styles';

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[{ name: '1' }, { name: '2' }, { name: '3' }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
