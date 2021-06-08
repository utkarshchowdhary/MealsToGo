import React from 'react';
import { SvgXml } from 'react-native-svg';

import { Favourite } from './favourite.component';
import { Text } from './typography/text.component';
import star from '../../assets/star';
import open from '../../assets/open';
import close from '../../assets/close';

import {
  RestaurantCard,
  RestaurantCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Icon,
  Address,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    placeId,
    name,
    icon,
    photos,
    vicinity: address,
    isOpenNow,
    rating,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {Array.from(new Array(Math.round(rating))).map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isOpenNow ? (
              <SvgXml xml={open} width={20} height={20} />
            ) : (
              <SvgXml xml={close} width={20} height={20} />
            )}
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
