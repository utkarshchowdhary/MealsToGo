import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { SvgXml } from 'react-native-svg';

import { Text } from '../components/typography/text.component';
import box from '../../assets/box';
import { RestaurantsList } from '../components/restaurants-list.styles';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { FavouritesContext } from '../services/favourites/favourites.context';

const EmptyContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
  flex: 0.5;
  justify-content: space-around;
  align-items: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <RestaurantsList
      data={favourites}
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
  ) : (
    <EmptyContainer>
      <Text variant="title">It's empty in here</Text>
      <SvgXml xml={box} width={180} height={180} />
    </EmptyContainer>
  );
};
