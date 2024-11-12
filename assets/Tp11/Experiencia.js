import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Experiência Profissional</Text>
      <Text>- Desenvolvedor Front-end na Empresa X</Text>
      <Text>- Estágio em Desenvolvimento Mobile na Empresa Y</Text>
      <Text>- Freelancer em projetos de React e React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  titulo: { fontWeight: 'bold', fontSize: 24, marginBottom: 20 },
});
