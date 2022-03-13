import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
      <Text>{searchTerm}</Text>
    </View>
  );
};

export default SearchScreen;
