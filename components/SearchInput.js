import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.searchContent}>
      <AntDesign
        name="search1"
        size={24}
        color="black"
        style={styles.searchIcon}
      />
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder="Search here..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContent: {
    flexDirection: "row",
    marginLeft: 8,
  },
  searchIcon: {
    marginRight: 10,
    color: "#6b7280",
  },
});
