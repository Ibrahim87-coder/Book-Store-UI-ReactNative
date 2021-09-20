import React from 'react'
import { Image,StyleSheet, Text, View } from 'react-native'
import { Home } from '../screens'
import {icons, COLORS } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings'
const Tab = createBottomTabNavigator();



const tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={({route})=>(
            {
                tabBarIcon: ({focused})=>{
                const tintColor = focused? COLORS.white: COLORS.gray;

                switch(route.name){
                    case "Home": return (
                        <Image
                            source={icons.dashboard_icon}
                            resizeMode="contain"
                            style={{
                                tintColor: tintColor,
                                width:25,
                                height:25
                            }}
                        />
                    )
                    case "Search": return (
                        <Image
                            source={icons.search_icon}
                            resizeMode="contain"
                            style={{
                                tintColor: tintColor,
                                width:25,
                                height:25
                            }}
                        />
                    )
                    case "Notifications": return (
                        <Image
                            source={icons.notification_icon}
                            resizeMode="contain"
                            style={{
                                tintColor: tintColor,
                                width:25,
                                height:25
                            }}
                        />
                    )
                    
                    case "Settings": return (
                        <Image
                            source={icons.menu_icon}
                            resizeMode="contain"
                            style={{
                                tintColor: tintColor,
                                width:25,
                                height:25
                            }}
                        />
                    )
                }
            },
            headerShown: false,
            tabBarStyle: {height:'10%',backgroundColor:COLORS.black}
        }
    )}
        >
            <Tab.Screen name="Home" component={Home}  />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default tabs

const styles = StyleSheet.create({})
