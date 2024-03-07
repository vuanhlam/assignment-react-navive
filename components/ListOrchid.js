import { FlatList, StyleSheet, View } from "react-native";
import { orchids } from "../data/orchid";
import { OrchidItem } from "./orchidItem";

export const ListOrchid = ({ listOrchids }) => {
  return (
    <View>
      <FlatList
        data={listOrchids}
        renderItem={(item) => <OrchidItem item={item.item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        key={2}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "center",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
