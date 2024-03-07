import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const OrchidItem = ({ item }) => {
  const navigation = useNavigation();

  function onPressHandler(id) {
    navigation.navigate("Detail", {
      orchidId: id,
    });
  }

  return (
    <Pressable
      onPress={() => onPressHandler(item.id)}
      style={({ pressed }) => (pressed ? styles.itemPressed : null)}
    >
      <View style={styles.itemContainer}>
        {/* <Feather name="heart" size={24} color="black" style={styles.heart} /> */}
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price} đ</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    width: 170,
    height: 190,
    borderRadius: 10,
    position: "relative",
    justifyContent: "space-between",
    margin: 5,
    textAlign: "center",
  },
  heart: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: 0,
    padding: 10,
    color: "#9fc6b3",
  },
  fillheart: {
    color: "#9fc6b3",
  },
  image: {
    width: 110,
    height: 130,
    alignSelf: "center",
    marginTop: 12,
  },
  title: {
    position: "absolute",
    zIndex: 3,
    bottom: 30,
    marginLeft: 10,
    fontWeight: "bold",
    color: '#475569'
  },
  price: {
    position: "absolute",
    zIndex: 3,
    bottom: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: '#475569'
  },
  itemPressed: {
    opacity: 0.5
  }
});
