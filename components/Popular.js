import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { popular } from "../data/popular";

export const Popular = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {popular.map((item) => {
        return (
          <View style={styles.popularContainer} key={item.id}>
            <View>
              <View style={styles.popularInfo}>
                <Text style={styles.orchidName}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.subTitle}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.textPrice}>{item.price}</Text>
              </View>
            </View>
            <View>
              <Image
                source={item?.image}
                style={styles.image}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  popularContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 170,
    height: 120,
    backgroundColor: "#74ad92",
    borderRadius: 16,
    paddingLeft: 11,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10
  },
  popularInfo: {
    marginBottom: 35,
  },
  priceContainer: {
    backgroundColor: "#fff",
    borderRadius: 9,
  },
  textPrice: {
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  orchidName: {
    fontWeight: "700",
    color: "#ffff",
    fontSize: 20,
  },
  subtitle: {
    color: "#ffff",
  },
  image: {
    width: 90,
    height: 110,
    // resizeMode: 'cover',
    // backgroundColor: 'yellow'
  },
});
