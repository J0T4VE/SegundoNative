import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/243x120' }} style={styles.imagem} />
      <Text style={styles.nome}>Jota</Text>
      <Text>Endereço: Rua Exemplo, 123</Text>
      <Text>Telefone: (99) 99999-9999</Text>
      <Text>Email: email@dom.com</Text>
      <Text style={styles.bio}>Bio: Desenvolvedor apaixonado por tecnologia e inovação...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  imagem: { width: 243, height: 120, marginBottom: 20 },
  nome: { fontWeight: 'bold', fontSize: 24, marginBottom: 10 },
  bio: { marginTop: 20, fontStyle: 'italic', textAlign: 'center' },
});
 