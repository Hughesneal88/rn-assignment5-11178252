import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const transactions = [
  {
    id: '1',
    icon: '../assets/apple.png',
    name: 'Apple Store',
    category: 'Entertainment',
    amount: -5.99,
  },
  {
    id: '2',
    icon: '../assets/spotify.png',
    name: 'Spotify',
    category: 'Music',
    amount: -12.99,
  },
  // Add other transactions here
];

const TransactionComponent = () => {
  const renderItem = ({ item }) => (
    <View style={styles.transactionRow}>
        <View style={styles.iconsOnly}>
            <Image source={require(item.icon)} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionCategory}>{item.category}</Text>
        </View>
        <Text style={[styles.amount, { color: item.amount < 0 ? 'red' : 'green' }]}>
            {item.amount < 0 ? `- $${Math.abs(item.amount)}` : `$${item.amount}`}
        </Text>
    </View>
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  iconsOnly: {
    borderRadius: '50%',
    padding: 10,
    backgroundColor: "#dcdcdc",
    alignItems: 'center',
    marginRight: 10,
},
  textContainer: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionCategory: {
    fontSize: 14,
    color: '#888',
  },
  amount: {
    fontSize: 16,
  },
});

export default TransactionComponent;
