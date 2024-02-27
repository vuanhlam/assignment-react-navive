import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, FontAwesome6,  } from "@expo/vector-icons";

import { HomeScreen } from "./screens/HomeScreen";
import { FavoritesList } from "./screens/FavoritesList";
import { DetailScreen } from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottonTabsView() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60, borderRadius: 8 },
        tabBarShowLabel: false,
        sceneContainerStyle: { backgroundColor: "red" },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="heart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottonTabsView}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
