import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Academico() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formação Acadêmica</Text>
      <Text>- Bacharelado em Ciência da Computação</Text>
      <Text>- Certificação em React Native</Text>
      <Text>- Cursos de UI/UX Design</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  titulo: { fontWeight: 'bold', fontSize: 24, marginBottom: 20 },
});
 