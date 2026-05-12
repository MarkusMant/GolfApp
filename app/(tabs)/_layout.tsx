import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    focused: boolean;
    isCenter?: boolean;
}) {
    const { name, focused } = props;

    return (
        <View
            className={`h-[54px] w-[54px] items-center justify-center rounded-full border-2 ${
                focused ? "border-[#22428C] bg-[#22428C]" : "border-[#22428C] bg-white"
            }`}
        >
            <FontAwesome name={name} size={24} color={focused ? "#1ad10a" : "#8e9199ce"} />
        </View>
    );
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#F3F4F6",
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 106,
                    paddingHorizontal: 25,
                    paddingTop: 32,
                    paddingBottom: 10,
                },
            }}
        >
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ focused }) => <TabBarIcon name="cog" focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => <TabBarIcon name="home" focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="play"
                options={{
                    title: "Play",
                    tabBarIcon: ({ focused }) => <TabBarIcon name="play" focused={focused} />,
                }}
            />

            <Tabs.Screen
                name="statistics"
                options={{
                    title: "Stats",
                    tabBarIcon: ({ focused }) => <TabBarIcon name="bar-chart" focused={focused} />,
                }}
            />
        </Tabs>
    );
}
