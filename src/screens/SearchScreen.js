import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
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
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
        onSearchTermSubmit={handleSearchTermSubmit}
      />
      <Text>{searchTerm}</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
