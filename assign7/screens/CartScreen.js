import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { CartContext } from '../contexts/CartContext';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  if (!cart.length) {
    return (
      <View style={styles.container}>
        <Text>No items in the cart</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {cart.map((item, index) => (
        <View key={index} style={styles.cartItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveFromCart(item)}>
            <Ionicons name="remove" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
  description: {
    fontSize: 14,
    color: '#555',
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
});
