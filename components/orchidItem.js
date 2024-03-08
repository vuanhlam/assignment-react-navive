import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getData, storeData } from "../store/asyncStorage";

export const OrchidItem = ({ item }) => {
  const id = item.id;
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  const isFav = favoriteList.includes(id);

  function onPressHandler(id) {
    navigation.navigate("Detail", {
      orchidId: id,
    });
  }

  function handleAddNewFav() {
    if (isFav) {
      const newItems = favoriteList.filter((item) => item !== id);
      storeData("fav-list", newItems);
    } else {
      storeData("fav-list", [...favoriteList, id]);
    }
    setIsActive(!isActive);
  }

  async function getOrchidList() {
    const favoriteList = await getData("fav-list");
    setFavoriteList(favoriteList);
  }

  useEffect(() => {
    getOrchidList();
  }, [favoriteList]);

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => handleAddNewFav()}
        style={styles.heartWrapper}
      >
        {isFav ? (
          <AntDesign name="heart" size={24} style={styles.heart} />
        ) : (
          <View hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Feather name="heart" size={25} style={styles.heart} />
          </View>
        )}
      </TouchableOpacity>
      <Pressable
        onPress={() => onPressHandler(item.id)}
        style={({ pressed }) => (pressed ? styles.itemPressed : null)}
      >
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price} đ</Text>
      </Pressable>
    </View>
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
    color: "#9fc6b3",
  },
  heartWrapper: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: 0,
    padding: 10,
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
    bottom: -20,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#475569",
  },
  price: {
    position: "absolute",
    zIndex: 3,
    bottom: -40,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#475569",
  },
  itemPressed: {
    opacity: 0.5,
  },
});
