import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Let's setup your account!</Text>
        <Text style={styles.subtitle}>Account can be your bank, credit card, or your wallet.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/secondPage")}>
        <Text style={styles.buttonText}>Let's go</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 48,
    // fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'left',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#7f3dff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FirstPage;
