import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FavoriteItem } from "../components/FavoriteItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { SearchInput } from "../components/SearchInput";

export const FavoritesList = () => {
  return (
    <SafeAreaView style={styles.favoriteList}>
      <View style={styles.searchInput}>
        <SearchInput />
      </View>
      <FavoriteItem />
      <FavoriteItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  favoriteList: {
    paddingHorizontal: 10,
    alignSelf: 'center'
  },
  searchArea: {
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: "#e4e4e7",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
  },
});
