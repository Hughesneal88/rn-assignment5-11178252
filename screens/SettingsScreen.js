import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {ThemeContext} from '../components/themeContext.js';
import MenuComponent from '../components/menuItems.js';

export default function DetailsScreen({ navigation }) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    <MenuComponent />
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Text style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>Settings Screen</Text>
      {/* <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      /> */}
     <Button
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        onPress={toggleTheme}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff', // Default light mode background color
    },
    darkContainer: {
      backgroundColor: '#121212', // Dark mode background color
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      color: '#000000', // Default text color
    },
  });
