import { Slot } from "expo-router";
import React from "react";
import { Text } from "react-native";

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </>
  );
};

export default RootLayout;
