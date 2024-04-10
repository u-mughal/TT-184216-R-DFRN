import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Se connecter</Text>
      <Text style={styles.subtitle}>Connectez-vous à votre compte</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="black" />
        <TextInput style={styles.input} placeholder="Identifiant" />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="black" />
        <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true} />
      </View>
      <Text style={styles.forgotPassword}>Mot de passe oublié</Text>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Se connecter</Text>
      </TouchableOpacity>
      <Text style={styles.or}>ou se connecter avec</Text>
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="white" />
        <Text style={styles.googleButtonText}>Se connecter avec Google</Text>
      </TouchableOpacity>
      <Text style={styles.register}>S'inscrire</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#841584',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
  },
  or: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#4285F4',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  register: {
    color: '#841584',
  },
});

export default SignIn;