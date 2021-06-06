import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => ({
    ...restaurant,
    isOpenNow: !!restaurant?.opening_hours?.open_now,
    photos: [mockImages[Math.floor(Math.random() * mockImages.length)]],
  }));

  return camelize(mappedResults);
};
