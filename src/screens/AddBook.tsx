import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Book } from './BookList';
import { addBook } from '../store/bookReducer';

interface FormData {
  title: string;
  author: string;
  yearPublished: string;
}

const AddBookScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { control, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

  /** Helpers */
  function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  const handleTextChange = (input: string) => {
    const formattedDate = input.replace(/\D/g, '');

    if (formattedDate.length <= 2) {
      return formattedDate;
    } else if (formattedDate.length <= 4) {
      return formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else {
      return formattedDate.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    }
  };

  const onSubmit = (data: FormData) => {
    const book: Book = { id: generateUUID(), ...data };
    dispatch(addBook(book));
    navigation.navigate('Home');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }: any) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="title"
        defaultValue=""
      />
      {errors.title && <Text style={styles.error}>Title is required</Text>}

      <Text style={styles.label}>Author:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }: any) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="author"
        defaultValue=""
      />
      {errors.author && <Text style={styles.error}>Author is required</Text>}

      <Text style={styles.label}>Year Published:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }: any) => (
          <TextInput
            style={styles.input}
            placeholder="dd.mm.yyyy"
            // onChangeText={field.onChange}
            onChangeText={(val: string) => setValue('yearPublished', handleTextChange(val))}
            value={new Date(handleTextChange(field.value))}
            maxLength={10}
            defaultValue={new Date().toLocaleDateString()}
            keyboardType="numeric"
          />
        )}
        name="yearPublished"
        defaultValue={new Date().toDateString()}
      />
      {errors.yearPublished && <Text style={styles.error}>Year Published is required</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Add Book</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0155CC',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddBookScreen;