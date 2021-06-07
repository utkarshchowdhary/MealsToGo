import React, { useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../services/location/location.context';

import { SearchContainer } from './search.styles';

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
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
