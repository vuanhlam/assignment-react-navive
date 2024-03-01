import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const FavoriteItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Image source={require("../assets/sample.png")} style={styles.image} />
      <View>
        <Text style={styles.title}>FaboriteItem</Text>
        <Text style={styles.detailDescription}>
          In order to constrain memory and enable smooth scrolling, content is
          rendered asynchronously offscreen. This means it's possible to scroll
          faster than the
        </Text>
        <View style={styles.footer}>
          <View>
            <Text style={styles.price}>60.000vnd</Text>
          </View>
          <View style={styles.buyBtn}>
            <Text style={styles.textButtonBuy}>Buy</Text>
          </View>
        </View>
      </View>
      <AntDesign name="heart" size={24} color="black" style={styles.heart} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ffff",
    width: 350,
    height: 130,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    position: "relative",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 110,
    backgroundColor: "#9fc6b3",
    borderRadius: 10,
    marginRight: 20,
  },
  detailDescription: {
    opacity: 0.6,
    textAlign: "justify",
    width: 200,
    fontSize: 10,
    paddingVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heart: {
    position: "absolute",
    top: 0,
    right: 0,
    color: "#618f79",
    paddingRight: 15,
    paddingTop: 6,
  },
  buyBtn: {
    backgroundColor: "#618f79",
    borderRadius: 8,
  },
  textButtonBuy: {
    color: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  price: {
    fontWeight: "bold",
  },
});
