import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Example icon library

const menuItems = [
  { id: '1', title: 'Language' },
  { id: '2', title: 'My Profile' },
  { id: '3', title: 'Contact Us' },
  { id: '4', title: 'Change Password' },
  { id: '5', title: 'Privacy Policy' },
];

const MenuItem = ({ title }) => (
  <View style={styles.menuItem}>
    <Text style={styles.menuText}>{title}</Text>
    <Icon name="arrow-forward" size={20} color="#888" />
  </View>
);

const MenuComponent = () => (
  <FlatList
    data={menuItems}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <MenuItem title={item.title} />}
  />
);

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 16,
  },
});

export default MenuComponent;
