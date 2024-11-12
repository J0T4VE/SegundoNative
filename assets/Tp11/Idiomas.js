import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Idiomas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Idiomas</Text>
      <Text>- Português: Nativo</Text>
      <Text>- Inglês: Avançado</Text>
      <Text>- Espanhol: Intermediário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  titulo: { fontWeight: 'bold', fontSize: 24, marginBottom: 20 },
});
