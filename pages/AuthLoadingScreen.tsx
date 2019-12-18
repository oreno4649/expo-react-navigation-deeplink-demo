import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AuthLoadingScreen() {
  return (
    <View style={styles.container}>
      <Text>Auth Loading screen dayo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
