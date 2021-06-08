import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { CompactRestaurantInfo } from './compact-restaurant-info.component';
import { Text } from './typography/text.component';

const FavouritesWrapper = styled.View`
  padding: 0 ${({ theme }) => theme.space[3]};
`;

const FavouriteWrapper = styled.View`
  margin-right: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => (
  <FavouritesWrapper>
    <Text variant="caption">Favourites Bar</Text>
    {!favourites.length && <Text>It's empty in here</Text>}
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
