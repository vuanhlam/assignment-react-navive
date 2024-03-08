import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { HomeScreen } from "./screens/HomeScreen";
import { FavoritesList } from "./screens/FavoritesList";
import { DetailScreen } from "./screens/DetailScreen";
import { useState } from "react";
import { storeData } from "./store/asyncStorage";
import { orchids } from "./data/orchid";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottonTabsView() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60, borderRadius: 8 },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#74ad92",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Octicons name="home" color={color} size={size} />
            </View>
            // <Octicons name="home" color={color} size={size} />
          ),
          headerShown: false,
          contentStyle: { backgroundColor: "red" },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="heart" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  storeData("orchid-list", orchids);
  storeData("fav-list", []);

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
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerTitle: "",
            headerShown: true,
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#74ad92" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
