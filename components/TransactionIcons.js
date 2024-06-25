import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const TransactionIcons = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconsOnly}>
            <Image source={require('../assets/send.png')}/>
          </View>
          <Text>Sent</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconsOnly}>
                <Image source={require('../assets/recieve.png')}/>
            </View>
          <Text>Receive</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconsOnly}>
                <Image source={require('../assets/loan.png')}/>
            </View>
          <Text>Loan</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconsOnly}>
                <Image source={require('../assets/topUp.png')}/>
            </View>
          <Text>Topup</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    iconButton: {
      alignItems: 'center',
      borderRadius: 20,
      borderColor: 'black'
    },
    iconsOnly: {
        borderRadius: 50,
        padding: 30,
        backgroundColor: "#dcdcdc",
        alignItems: 'center',
        marginBottom: 5,

    }
  });
  
  export default TransactionIcons;