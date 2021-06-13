import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results }) => {
  const formattedResults = camelize(results);

  return formattedResults.map((restaurant) => ({
    ...restaurant,
    isOpenNow: !!restaurant.openingHours && restaurant.openingHours.openNow,
    photos: [mockImages[Math.floor(Math.random() * mockImages.length)]],
  }));
};
