import React from 'react';

import { CompactRestaurantInfo } from './compact-restaurant-info.component';

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
