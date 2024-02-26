import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BooksApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'grey'
  },
});

export default Logo;
