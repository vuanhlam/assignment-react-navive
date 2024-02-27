import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories } from "../components/Categories";
import { Popular } from "../components/Popular";
import { AntDesign } from "@expo/vector-icons";
import { OrchidItem } from "../components/orchidItem";

export const HomeScreen = () => {
  const [value, setValue] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={true}>
        <View>
          <Text style={styles.header}>Let's find your</Text>
          <Text style={styles.plants}>plants!</Text>
        </View>
        <View style={styles.searchInput}>
          <View style={styles.searchContent}>
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              onChangeText={setValue}
              value={value}
              placeholder="Search here..."
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Popular</Text>
          <Popular />
        </View>
        <View>
          <Text style={styles.title}>Categories</Text>
        </View>
        <View>
          <Categories />
        </View>
        <View>
          <OrchidItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "#e4e4e7",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  searchContent: {
    flexDirection: "row",
    marginLeft: 8,
  },
  searchIcon: {
    marginRight: 10,
    color: "#6b7280",
  },
  
  container: {
    marginHorizontal: 10,
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
    paddingBottom: 10,
    color: "#374151",
  },
});
