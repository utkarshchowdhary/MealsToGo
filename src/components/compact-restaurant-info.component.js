import React from 'react';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

import { Favourite } from './favourite.component';
import { Text } from './typography/text.component';

const Item = styled.View`
  max-width: 120px;
  padding: 10px;
  align-items: center;
`;

const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const CompactWebview = styled(WebView)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isMap && isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Favourite restaurant={restaurant} />
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};
