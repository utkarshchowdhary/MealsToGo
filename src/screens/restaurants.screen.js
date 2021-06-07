import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { SafeArea } from '../components/utility/safe-area.component';
import { Search } from '../components/search.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantsContext } from '../services/restaurants/restaurants.context';

import {
  LoadingContainer,
  Loading,
  RestaurantList,
} from './restaurants.styles';

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#ff8a5b" />
        </LoadingContainer>
      )}
      <Search />
      {!isLoading && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </SafeArea>
  );
};
