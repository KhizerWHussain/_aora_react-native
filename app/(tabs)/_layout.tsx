import { Image, Text, View } from "react-native";
import React, { Fragment } from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabsLayout = () => {
  return (
    <Fragment>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <TabIcon
                size={size}
                focused={focused}
                color={color}
                icon={icons.home}
              />
            ),
          }}
        />
      </Tabs>
    </Fragment>
  );
};

export default TabsLayout;

const TabIcon = ({ color, size, focused, icon }: any) => {
  return (
    <View>
      <Image source={icon} resizeMode="contain" />
    </View>
  );
};
