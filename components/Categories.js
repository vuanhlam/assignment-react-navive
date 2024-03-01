import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { categories } from "../data/categories";

export const Categories = () => {
  const [itemSelected, setItemSelected] = useState(0);

  function handleSelectedItem(id) {
    setItemSelected(id);
  }

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.cateList}
    >
      {categories.map((cate, index) => {
        return (
          <Pressable
            onPress={() => handleSelectedItem(cate.id)}
            // style={({pressed}) => pressed && styles.cateItemActive}
            key={cate.id}
          >
            <View
              style={[
                styles.cateItem,
                cate.id === itemSelected && styles.cateItemActive,
                itemSelected === cate.id && styles.firstCateItem,
              ]}
            >
              <Text
                style={[
                  styles.cateText,
                  cate.id === itemSelected && { color: "white" },
                ]}
              >
                {cate.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cateList: {
    paddingVertical: 10,
  },
  cateItem: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 15,
    marginHorizontal: 3,
    backgroundColor: "#c7ded3",
  },
  firstCateItem: {
    marginLeft: 0,
  },
  cateText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4b5563",
  },
  cateItemActive: {
    backgroundColor: "#74ad92",
    borderRadius: 15,
  },
});
