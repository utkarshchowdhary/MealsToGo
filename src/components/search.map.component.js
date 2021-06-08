import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../services/location/location.context';

export const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
  width: 100%;
  position: absolute;
  top: 32px;
  z-index: 1;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        selectionColor="#ff8a5b"
        icon="map"
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
