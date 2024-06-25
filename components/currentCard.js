import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CurrentCard = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/Card.png')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 10,
  },
});

export default CurrentCard;
