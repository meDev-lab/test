import React, { useEffect, useState, version } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, updateBook } from '../store/bookReducer';
import { Book } from './BookList';

const DetailsScreen: React.FC<{ route: { params: { id: string } }, navigation: any }> = ({ route, navigation }) => {
  const id = route.params.id;
  const dispatch = useDispatch();
  const booksEdit: Book = useSelector((state: any) => state.book.books.find((x: any) => x?.id === id));
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [yearPublished, setYearPublished] = useState('')

  useEffect(() => {
    setTitle(booksEdit?.title)
    setAuthor(booksEdit?.author)
    setYearPublished(booksEdit?.yearPublished)
  }, [booksEdit])

  const handleRemove = () => {
    dispatch(removeBook(id));
    navigation.navigate('Home');
  };

  const handleUpdate = () => {
    dispatch(updateBook({ ...booksEdit, id, title, author, yearPublished }));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.text}
        onChangeText={(val: string) => setTitle(val)}
        value={title}
      />

      <Text style={styles.label}>Author:</Text>
      <TextInput
        style={styles.text}
        onChangeText={(val: string) => setAuthor(val)}
        value={author}
      />

      <Text style={styles.label}>Year Published:</Text>
      <TextInput
        style={styles.text}
        onChangeText={(val: string) => setYearPublished(val)}
        value={yearPublished}
      />

      <View style={styles.buttonContainer}>
        <Button title="Remove" onPress={handleRemove} />
        <Button title="Update" onPress={handleUpdate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    backgroundColor: 'white',
    padding: 5,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default DetailsScreen;