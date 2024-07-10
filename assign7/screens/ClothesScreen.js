import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Store Screen</Text>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
