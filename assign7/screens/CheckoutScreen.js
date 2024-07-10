import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../contexts/CartContext';

const CheckoutScreen = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace('$', ''));
      return total + itemPrice;
    }, 0).toFixed(2);
  };

  const totalCost = calculateTotalCost();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
        <Ionicons name="search" size={24} style={styles.searchIcon} />
      </View>
      <Text style={styles.checkoutText}>CHECKOUT</Text>
      <ScrollView contentContainerStyle={styles.selectedItemsContainer}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemInfo}>{item.details}</Text>
              <Text style={styles.itemInfo}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Ionicons name="close-circle-outline" size={24} color="red" style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Est cost</Text>
        <Text style={styles.totalAmount}>${totalCost}</Text>
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  logo: {
    width: '100%', 
    height: 50,
    resizeMode: 'contain', 
  },
  searchIcon: {
    color: 'black',
  },
  checkoutText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  selectedItemsContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  itemImage: {
    width: 120,
    height: 170,
    borderRadius: 10,
    marginRight: 20,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemInfo: {
    fontSize: 16,
    color: '#666',
  },
  removeIcon: {
    marginLeft: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
