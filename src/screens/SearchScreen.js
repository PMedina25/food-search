import React, { useState } from "react";
import { Text, View } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  const handleSearchTermSubmit = () => {
    searchApi();
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
        onSearchTermSubmit={handleSearchTermSubmit}
      />
      <Text>{searchTerm}</Text>
      <Text>We have found {results?.length} results</Text>
    </View>
  );
};

export default SearchScreen;
