import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { orchids } from "../data/orchid";

export const FavoriteItem = ({ id }) => {
  const item = orchids.find((item) => item.id === id);

  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.name}</Text>
        {/* <Text style={styles.detailDescription}>{item.des}</Text> */}
        <Text style={styles.branches}>Số lượng cành hoa: {item.branches}</Text>
        <Text style={styles.pots}>Loại chậu: {item.pots}</Text>
        <View style={styles.footer}>
          <View>
            <Text style={styles.price}>60.000vnd</Text>
          </View>
        </View>
      </View>
      <View style={styles.buyBtn}>
        <Text style={styles.textButtonBuy}>Buy</Text>
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
    marginTop: 10,
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
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 10
  },
  textButtonBuy: {
    color: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  price: {
    fontWeight: "bold",
  },
  pots: {
    marginTop: 7,
  },
  branches: {
    marginTop: 7,
  },
});
