import React, { useState } from "react";
import { Text, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  const handleSearchTermSubmit = () => {
    searchApi(searchTerm);
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
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ResultsList title="Cost Effective" results={filterResultsByPrice("$")} />
      <ResultsList title="Bit pricier" results={filterResultsByPrice("$$")} />
      <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")} />
    </View>
  );
};

export default SearchScreen;
