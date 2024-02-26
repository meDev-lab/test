import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export interface Book {
  id: string;
  title: string;
  author: string;
  yearPublished: string;
}

const BookListScreen: React.FC = () => {
  const navigation = useNavigation();
  const books: Book[] = useSelector((state: RootState) => state.book.books);

  const handlePress = (item: Book) => {
    navigation.navigate('Details', { id: item?.id })
  };

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.item}>
        <Image source={{ uri: `https://picsum.photos/200/300` }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.otherInfo}>{item.yearPublished}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books ?? []}
        renderItem={renderItem}
        keyExtractor={(item: Book) => item.id}
        contentContainerStyle={styles.flatListContent}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>No items to display</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  flatListContent: {
    paddingTop: 10,
    flexGrow: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 150,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    marginBottom: 3,
  },
});

export default BookListScreen;