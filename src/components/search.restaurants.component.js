import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../services/location/location.context';

export const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        selectionColor="#ff8a5b"
        value={searchKeyword}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
