import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Overview screen dayo</Text>
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
