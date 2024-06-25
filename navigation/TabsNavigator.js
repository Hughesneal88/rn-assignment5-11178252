import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
       screenOptions={({ route }) => ({
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          headerShown: false,
          style: {
            backgroundColor: 'white', // Background color of the tab bar
            borderTopWidth: 1, // Top border of the tab bar
            borderTopColor: 'lightgray', // Color of the top border
          },
          tabStyle: {
            paddingVertical: 20, // Vertical padding of each tab
          },
          tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('../assets/home.png');
          } else if (route.name === 'Settings') {
            iconName = require('../assets/settings.png');
          }
          else if (route.name === 'My Cards') {
            iconName = require('../assets/myCards.png');
          }
          else if (route.name === 'Statistics') {
            iconName = require('../assets/statictics.png');
          }
          // Return an Image component with the custom icon
          return <Image source={iconName} style={[styles.icon, { tintColor: color, width: size, height: size }]} />;
        },
      })}

      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={HomeScreen} />
        <Tab.Screen name="Statistics" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    fit: 'contain',
    marginTop: 10,
    alignItems: 'center'
  },

});