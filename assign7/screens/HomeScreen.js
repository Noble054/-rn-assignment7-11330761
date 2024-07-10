import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext } from '../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const goToProductDetail = (item) => {
    navigation.navigate('Product Details', { product: item });
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return `${text.substring(0, length)}...`;
  };

  const renderImagePairs = (items) => {
    const pairs = [];
    for (let i = 0; i < items.length; i += 2) {
      pairs.push(
        <View key={i} style={styles.imagePair}>
          <TouchableOpacity onPress={() => goToProductDetail(items[i])} style={styles.imageContainer}>
            <Image source={{ uri: items[i].image }} style={styles.image} />
            <Text style={styles.dressName}>{items[i].title}</Text>
            <Text style={styles.dressDetails}>{truncateText(items[i].description, 50)}</Text>
            <Text style={styles.dressPrice}>${items[i].price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(items[i])}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>
          {items[i + 1] && (
            <TouchableOpacity onPress={() => goToProductDetail(items[i + 1])} style={styles.imageContainer}>
              <Image source={{ uri: items[i + 1].image }} style={styles.image} />
              <Text style={styles.dressName}>{items[i + 1].title}</Text>
              <Text style={styles.dressDetails}>{truncateText(items[i + 1].description, 50)}</Text>
              <Text style={styles.dressPrice}>${items[i + 1].price}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(items[i + 1])}>
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        </View>
      );
    }
    return pairs;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storySection}>
        <Text style={styles.storyText}>Our story</Text>
        <View style={styles.roundImages}>
          <Ionicons name="list-outline" size={34} style={styles.icon} />
          <Ionicons name="filter-outline" size={34} style={styles.icon} />
        </View>
      </View>
      <ScrollView>
        {renderImagePairs(items)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  storyText: {
    fontSize: 18,
  },
  roundImages: {
    flexDirection: 'row',
  },
  imagePair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  imageContainer: {
    width: '48%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  dressName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  dressDetails: {
    fontSize: 14,
    color: '#555',
  },
  dressPrice: {
    fontSize: 16,
    color: '#000',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 5,
  },
});
