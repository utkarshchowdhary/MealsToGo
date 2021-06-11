import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { SafeArea } from '../components/utility/safe-area.component';
import { Search } from '../components/search.restaurants.component';
import { FavouritesBar } from '../components/favourites-bar.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantsContext } from '../services/restaurants/restaurants.context';
import { FavouritesContext } from '../services/favourites/favourites.context';
import { RestaurantsList } from '../components/restaurants-list.styles';

import { LoadingContainer, Loading } from './restaurants.styles';

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#ff8a5b" />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {!isLoading && (
        <RestaurantsList
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
