import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FavoriteItem } from "../components/FavoriteItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { SearchInput } from "../components/SearchInput";
import { getData } from "../store/asyncStorage";
import { useFocusEffect } from "@react-navigation/native";

export const FavoritesList = () => {
  const [listFav, setListFav] = useState([]);

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
        {listFav.length > 0 ? (
          listFav.map((item, index) => {
            return <FavoriteItem key={`item ${index}`} id={item} />;
          })
        ) : (
          <Text>favorite list is empty</Text>
        )}
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
    width: '800'
  },
});
