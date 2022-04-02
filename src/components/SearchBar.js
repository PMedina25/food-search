import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={30} color="black" />
      <TextInput
        style={styles.inputStyle}
        onChangeText={onSearchTermChange}
        onSubmitEditing={onSearchTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        value={searchTerm}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1EEEE",
    borderRadius: 5,
    height: 50,
    marginTop: 10,
    marginHorizontal: 15,
  },
  inputStyle: {
    height: "100%",
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
});

export default SearchBar;
