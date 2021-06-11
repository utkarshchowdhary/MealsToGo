import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { CompactRestaurantInfo } from './compact-restaurant-info.component';

const FavouritesWrapper = styled.View`
  padding: 0 ${({ theme }) => theme.space[3]};
`;

const FavouriteWrapper = styled.View`
  margin-right: ${({ lastChild }) => (!lastChild ? '10px' : '0px')};
`;

export const FavouritesBar = ({ favourites, onNavigate }) => (
  <FavouritesWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favourites.map((restaurant, i) => {
        return (
          <FavouriteWrapper
            key={restaurant.placeId}
            lastChild={i === favourites.length - 1}
          >
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
