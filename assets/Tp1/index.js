import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tp1() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Item A</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item B</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  item: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});
