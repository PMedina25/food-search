import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
        keyExtractor={(photo) => photo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginVertical: 10,
    marginLeft: 10,
    width: 300,
    height: 200,
    borderRadius: 4,
  },
});

export default ResultsShowScreen;
