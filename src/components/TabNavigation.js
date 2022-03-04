import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, FontAwesome } from "react-native-vector-icons"
import Setings from "./Setings";
import Profile from "./Profile";
import Connections from './Connections';
import Messages from "./Messages";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Settings") {
                            iconName = focused ? "settings" : "settings";
                            return <Ionicons name={iconName} size={size} color={color} />;
                        } else if (route.name === "Message") {
                            iconName = focused ? "message" : "message";
                            return <Entypo name={iconName} size={size} color={color} />
                        } else if (route.name === "Connections") {
                            iconName = focused ? "bell" : "bell";
                            return <FontAwesome name={iconName} size={size} color={color} />;
                        } else if (route.name === "Profile") {
                            iconName = focused ? "person" : "person";
                            return <Ionicons name={iconName} size={size} color={color} />;
                        }
                    },
                    headerShown: false,
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen name="Settings" component={Setings} />
                <Tab.Screen name="Message" component={Messages} />
                <Tab.Screen name="Connections" component={Connections} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;
