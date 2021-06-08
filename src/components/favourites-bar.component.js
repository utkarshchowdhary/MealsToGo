import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { CompactRestaurantInfo } from './compact-restaurant-info.component';
import { Text } from './typography/text.component';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouriteWrapper = styled.View`
  margin-right: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => (
  <FavouritesWrapper>
    <Text variant="caption">Favourites</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favourites.map((restaurant) => {
        return (
          <FavouriteWrapper key={restaurant.placeId}>
            <TouchableOpacity
              onPress={() =>
                onNavigate('RestaurantDetail', {
                  restaurant,
                })
              }
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </FavouriteWrapper>
        );
      })}
    </ScrollView>
  </FavouritesWrapper>
);
