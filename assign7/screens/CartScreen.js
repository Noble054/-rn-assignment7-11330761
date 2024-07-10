import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { CartContext } from '../contexts/CartContext';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  if (!cart.length) {
    return (
      <View style={styles.container}>
        <Text>No items in the cart</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
      </View>
      <ScrollView style={styles.cartList}>
        {cart.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveFromCart(item)}>
              <Ionicons name="remove" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Est. Total:</Text>
          <Text style={styles.totalAmount}>${getTotal()}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  cartList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  removeButton: {
    backgroundColor: '#ff0000',
    borderRadius: 20,
    padding: 5,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
  },
});

export default CartScreen;
