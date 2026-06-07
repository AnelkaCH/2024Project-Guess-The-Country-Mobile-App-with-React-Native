import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
const WinScreen = (props) => {
  const { navigation } = props;
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 You Win! 🎉</Text>
      <Text style={styles.sub}>You reached 50 points!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f5e9',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  sub: {
    fontSize: 18,
    color: '#555',
    marginBottom: 32,
  },
  button: {
    backgroundColor: 'skyblue',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
 
export default WinScreen;