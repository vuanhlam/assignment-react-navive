import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { orchids } from "../data/orchid";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const FavoriteItem = ({ id, handleDeleteFav }) => {
  const item = orchids.find((item) => item.id === id);
  const navigation = useNavigation();

  function onPressHandler(id) {
    navigation.navigate("Detail", {
      orchidId: id,
    });
  }
  return (
    <Pressable onPress={() => onPressHandler(item.id)}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles?.image} />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          {/* <Text style={styles.detailDescription}>{item.des}</Text> */}
          <Text style={styles.pots}>
            <Text style={styles.text}>Loại chậu:</Text> {item.pots}
          </Text>
          <Text style={styles.branches}>
            <Text style={styles.text}>Số lượng cành hoa:</Text> {item.branches}
          </Text>
          <View style={styles.footer}>
            <View>
              <Text style={styles.price}>{item.price}vnd</Text>
            </View>
          </View>
        </View>
        <View style={styles.buyBtn}>
          <Text style={styles.textButtonBuy}>Mua</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleDeleteFav(item.id)}
          style={styles.heartWrapper}
        >
          <AntDesign
            name="heart"
            size={24}
            color="black"
            style={styles.heart}
          />
        </TouchableOpacity>
        {/* <Feather name="heart" size={25} style={styles.heart} /> */}
      </View>
    </Pressable>
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
  heartWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingRight: 15,
    paddingTop: 6,
  },
  heart: {
    color: "#618f79",
  },
  buyBtn: {
    backgroundColor: "#618f79",
    borderRadius: 8,
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 10,
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
  text: {
    fontWeight: "bold",
    color: "#475569",
  },
});
