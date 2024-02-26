import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddButton: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('AddBook');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.addButton}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    marginRight: 15,
  },
  buttonText: {
    fontSize: 28,
    color: '#0155CC'
  },
});

export default AddButton;