import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const DetailScreen = ({ route }) => {
  const id = route.params.orchidId;
  return (
    <SafeAreaView styles={styles.detailContainer}>
      <Image source={require("../assets/sample.png")} style={styles.image} />
      <View style={styles.description}>
        <View style={styles.topInfo}>
          <View>
            <Text style={styles.title}>Hello Monstera</Text>
            <Text style={styles.subtitle}>Hello Monstera</Text>
          </View>
          {/* <Feather name="heart" size={24} color="black" style={styles.heart} /> */}
          <AntDesign
            name="heart"
            size={24}
            color="black"
            style={styles.heart}
          />
        </View>
        <Text style={styles.price}>60.000 VND</Text>
        <Text style={styles.detailDescription}>
          In order to constrain memory and enable smooth scrolling, content is
          rendered asynchronously offscreen. This means it's possible to scroll
          faster than the fill rate and momentarily see blank content. This is a
          tradeoff that can be adjusted to suit the needs of each application,
          and we are working on improving it behind the scenes.
        </Text>
        <View style={styles.footer}>
          <View style={styles.quantity}>
            <View style={styles.minusplus}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>-</Text>
            </View>
            <View style={styles.number}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>1</Text>
            </View>
            <View style={styles.minusplus}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>+</Text>
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
    marginTop: 10,
    opacity: 0.6,
    textAlign: "justify",
    width: "100%",
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
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  heart: {
    color: "#9fc6b3",
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  cartButton: {
    backgroundColor: "#618f79",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 13
  },
  cartText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  },
  minusplus: {
    backgroundColor: '#e4e8e6',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  number: {
    paddingHorizontal: 10,
  }
});
