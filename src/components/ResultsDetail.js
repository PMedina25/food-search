import { Image, StyleSheet, Text, View } from "react-native";

const ResultsDetail = ({ imageSource, name, rating, reviewCount }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: imageSource }} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {reviewCount} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    marginVertical: 5,
  },
});

export default ResultsDetail;
