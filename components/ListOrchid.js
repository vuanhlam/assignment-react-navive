import { FlatList, StyleSheet, View } from "react-native";
import { orchids } from "../data/orchid";
import { OrchidItem } from "./orchidItem";

export const ListOrchid = () => {
  return (
    <View>
      <FlatList
        data={orchids}
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
