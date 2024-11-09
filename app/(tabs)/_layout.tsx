import { Image, Text, View } from "react-native";
import React, { Fragment } from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const tabsArray = [
  { name: "home", title: "Home", icon: icons.home },
  { name: "bookmark", title: "Bookmark", icon: icons.bookmark },
  { name: "create", title: "Create", icon: icons.plus },
  { name: "profile", title: "Profile", icon: icons.profile },
];

const TabsLayout = () => {
  return (
    <Fragment>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        {tabsArray.map((item: any, i: number) => (
          <Tabs.Screen
            name={item.name}
            key={i}
            options={{
              title: item.title,
              headerShown: false,
              tabBarIcon: ({ focused, size, color }) => (
                <TabIcon
                  size={size}
                  focused={focused}
                  color={color}
                  icon={item.icon}
                  name={item.title}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </Fragment>
  );
};

export default TabsLayout;

const TabIcon = ({ color, size, focused, icon, name }: any) => {
  console.log("size ==>", size);
  return (
    <View className="justify-center items-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};
