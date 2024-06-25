import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CurrentCard from '../components/currentCard';
import TransactionIcons from '../components/TransactionIcons';

export default function HomeScreen({ navigation }) {
  return (
    <>
    <Header />
    <CurrentCard />
    <TransactionIcons />
    </>
    // <View style={styles.container}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Settings"
    //     onPress={() => navigation.navigate('Settings')}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
