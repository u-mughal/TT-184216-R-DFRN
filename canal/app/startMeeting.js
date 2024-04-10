import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CanalMeet</Text>
      <TextInput
        style={styles.input}
        placeholder="N° réunion / Nom de la salle"
      />
      <Text>Votre son et votre caméra est désactivée</Text>
      <Button title="Commencer" onPress={() => {}} />
      <Button title="Planifier pour plus tard" onPress={() => {}} />
      <Text style={styles.link}>S'inscrire à une réunion planifiée</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  link: {
    color: 'blue',
  },
});