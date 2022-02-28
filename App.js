import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/context/AuthContext";

import NavigationTab from "./src/navigations/NavigationTab";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationTab />
      </AuthProvider>
    </NavigationContainer>
  );
}
