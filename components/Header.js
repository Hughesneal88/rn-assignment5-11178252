import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.avatar}
        />
        <View style={{padding: 10}}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>Eric Atsu</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('../assets/search.png')}
            style={{ width: 20, height: 20 }}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%', // Adjust based on your status bar height
    marginHorizontal: 30,
  },
  statusBar: {
    height: 20,
    // Styles for your status bar go here
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    // Add other styling as needed
  },
  welcomeText: {
    fontSize: 16,
    color: 'gray',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    backgroundColor: '#dcdcdc',
    borderColor: '#00000',
    borderRadius: 20,
    width: 40,
    height: 40,
    padding: 5,
    marginLeft: 10,

  },
});

export default Header;
