import { FlatList, Text, StyleSheet, View } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <ResultsDetail
            imageSource={item.image_url}
            name={item.name}
            rating={item.rating}
            reviewCount={item.review_count}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
});

export default ResultsList;
