import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const LocationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
        <Text style={styles.title}>Locations</Text>
      </View>
      <Text style={styles.content}>
        We have multiple locations around the world to serve you. Our stores are located in:
        {'\n'}{'\n'}
        - New York, USA
        {'\n'}{'\n'}
        - London, UK
        {'\n'}{'\n'}
        - Tokyo, Japan
        {'\n'}{'\n'}
        - Sydney, Australia
        {'\n'}{'\n'}
        - Paris, France
        {'\n'}{'\n'}
        Feel free to visit any of our locations for an amazing shopping experience.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default LocationScreen;
