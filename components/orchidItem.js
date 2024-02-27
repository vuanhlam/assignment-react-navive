import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const OrchidItem = () => {
  return (
    <Pressable>
      <View style={styles.list}>
        <View style={styles.itemContainer}>
          <Feather name="heart" size={24} color="black" style={styles.heart} />
          <Image
            source={require("../assets/sample.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Bonsai</Text>
          <Text style={styles.price}>$80</Text>
        </View>
        <View style={styles.itemContainer}>
          <AntDesign
            name="heart"
            size={24}
            color="black"
            style={[styles.heart, styles.fillheart]}
          />
          <Image
            source={require("../assets/sample.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Bonsai</Text>
          <Text style={styles.price}>$80</Text>
        </View>

        <View style={styles.itemContainer}>
          <AntDesign
            name="heart"
            size={24}
            color="black"
            style={[styles.heart, styles.fillheart]}
          />
          <Image
            source={require("../assets/sample.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Bonsai</Text>
          <Text style={styles.price}>$80</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  itemContainer: {
    backgroundColor: "#fff",
    width: 170,
    height: 190,
    borderRadius: 10,
    position: "relative",
    justifyContent: "space-between",
    marginBottom: 14,
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
    width: 130,
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
  },
  price: {
    position: "absolute",
    zIndex: 3,
    bottom: 10,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
