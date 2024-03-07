import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories } from "../components/Categories";
import { Popular } from "../components/Popular";
import { AntDesign } from "@expo/vector-icons";
import { OrchidItem } from "../components/orchidItem";
import { ListOrchid } from "../components/ListOrchid";
import { SearchInput } from "../components/SearchInput";
import { orchids } from "../data/orchid";
import { getData, storeData } from "../store/asyncStorage";

export const HomeScreen = () => {
  const [selectedCate, setSelectedCate] = useState(0);

  const filteredOrchids = orchids.filter((item) => {
    if (selectedCate !== 0) {
      return item.id === selectedCate;
    }
    return item;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Let's find your</Text>
        <Text style={styles.plants}>plants!</Text>
      </View>
      <View style={styles.searchInput}>
        <SearchInput />
      </View>
      {/* <View>
        <Text style={styles.title}>Popular</Text>
        <Popular />
      </View> */}
      <View>
        <Text style={styles.title}>Categories</Text>
      </View>
      <View>
        <Categories selectCategory={setSelectedCate} />
      </View>
      <View style={{ flex: 1 }}>
        <ListOrchid listOrchids={filteredOrchids} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "#e4e4e7",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
  },
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#3f3f46",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    // paddingTop: 15,
    color: "#374151",
  },
  plants: {
    fontSize: 30,
    fontWeight: "bold",
    // paddingBottom: 3,
    color: "#374151",
  },
});
