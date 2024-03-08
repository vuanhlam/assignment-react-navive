import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FavoriteItem } from "../components/FavoriteItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { SearchInput } from "../components/SearchInput";
import { getData, storeData } from "../store/asyncStorage";
import { useFocusEffect } from "@react-navigation/native";

export const FavoritesList = () => {
  const [listFav, setListFav] = useState([]);

  function handleDeleteFav(id) {
    const newFavList = listFav.filter((item) => item !== id);
    setListFav(newFavList)
    storeData("fav-list", newFavList)
  }

  useFocusEffect(
    React.useCallback(() => {
      getAllFavoriteList();

      return () => {
        // Optional cleanup function. This will run when the screen goes out of focus
      };
    }, [])
  );

  async function getAllFavoriteList() {
    try {
      const data = await getData("fav-list");
      setListFav(data);
      console.log("favoriteList", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.favoriteList}>
      <View style={styles.searchInput}>
        <SearchInput />
      </View>
      <ScrollView>
        <View style={styles.listView}>
          {listFav.length > 0 ? (
            listFav.map((item, index) => {
              return <FavoriteItem handleDeleteFav={handleDeleteFav} key={`item ${index}`} id={item} />;
            })
          ) : (
            <Text style={styles.empty}>favorite list is empty</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  favoriteList: {
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  searchArea: {
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: "#e4e4e7",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    width: Dimensions.get("window").width - 20,
    marginHorizontal: 10,
  },
  empty: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 40,
  },
  listView: {
    justifyContent: "center",
    alignItems: 'center'
  },
});
