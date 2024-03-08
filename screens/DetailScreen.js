import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { orchids } from "../data/orchid";
import { getData, storeData } from "../store/asyncStorage";

export const DetailScreen = ({ route }) => {
  const id = route.params?.orchidId;
  const [isActive, setIsActive] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  const orchid = orchids.find((item) => item.id === id);

  const isFav = favoriteList.includes(id);

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
    <SafeAreaView styles={styles.detailContainer}>
      <Image source={orchid?.image} style={styles.image} />
      <View style={styles.description}>
        <View style={styles.topInfo}>
          <View>
            <Text style={styles.title}>{orchid.name}</Text>
            <Text style={styles.subtitle}>{orchid.pots}</Text>
          </View>
          <TouchableOpacity onPress={() => handleAddNewFav()}>
            {isFav ? (
              <AntDesign name="heart" size={24} style={styles.heart} />
            ) : (
              <View hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Feather name="heart" size={25} style={styles.heart} />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>{orchid.price} vnd</Text>
        <Text style={styles.detailDescription}>{orchid.des}</Text>
        <View style={styles.footer}>
          <View style={styles.quantity}>
            <View style={styles.minusplus}>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>-</Text>
            </View>
            <View style={styles.number}>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>1</Text>
            </View>
            <View style={styles.minusplus}>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>+</Text>
            </View>
          </View>
          <View style={styles.cartButton}>
            <Text style={styles.cartText}>Add to cart</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: "#9fc6b3",
    flex: 1,
  },
  image: {
    width: 290,
    height: 290,
    alignSelf: "center",
  },
  description: {
    backgroundColor: "#fff",
    height: 340,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  detailDescription: {
    height: 100,
    // marginTop: 10,
    opacity: 0.6,
    // textAlign: "justify",
    width: "100%",
    fontSize: 13,
    marginTop: 5,
  },
  topInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 5,
    fontSize: 15,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  heart: {
    color: "#9fc6b3",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  cartButton: {
    backgroundColor: "#618f79",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 13,
  },
  cartText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  minusplus: {
    backgroundColor: "#e4e8e6",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  number: {
    paddingHorizontal: 10,
  },
});
