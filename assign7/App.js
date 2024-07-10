import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import { CartProvider } from './contexts/CartContext';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import StoreScreen from './screens/StoreScreen';
import LocationScreen from './screens/LocationScreen';
import BlogScreen from './screens/BlogScreen';
import JewelryScreen from './screens/JewelryScreen';
import ElectronicsScreen from './screens/ElectronicsScreen';
import ClothesScreen from './screens/ClothesScreen';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="menu" size={28} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <View style={styles.headerTitle}>
            <Image source={require('./assets/images/Logo.png')} style={styles.logo} />
          </View>
        ),
        headerRight: () => (
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => console.log('Search pressed')}>
              <Ionicons name="search" size={28} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Ionicons name="cart" size={28} style={styles.icon} />
            </TouchableOpacity>
          </View>
        ),
      }}
    />
    <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeStack">
          <Drawer.Screen name="Albert Tetteh" component={HomeStack} options={{ headerShown: false }} />
          <Drawer.Screen name="Store" component={StoreScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Blog" component={BlogScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Location" component={LocationScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Jewelry" component={JewelryScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Electronics" component={ElectronicsScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Clothing" component={ClothesScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default App;
