import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Ionicons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#000',
    marginVertical: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    marginLeft: 10,
  },
});
