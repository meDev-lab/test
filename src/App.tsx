import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import BookListScreen from './screens/BookList';
import DetailsBookScreen from './screens/DetailsBook';
import AddBookScreen from './screens/AddBook';
import AddButton from './components/AddBookButton';
import Logo from './components/Logo';
import store from './store/store';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer {...{ gestureEnabled: true }}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BookListScreen}
            options={{
              headerTitle: '',
              headerLeft: () => <Logo />,
              headerRight: () => <AddButton />,
            }}
          />
          <Stack.Screen name="Details" component={DetailsBookScreen} options={{ title: 'Details Book' }} />
          <Stack.Screen name="AddBook" component={AddBookScreen} options={{ title: 'Add Book' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
