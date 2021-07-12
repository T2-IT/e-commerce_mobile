import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../../../pages/Cart';
import Header from '../../../Components/Header';

const Stack = createStackNavigator();

function MyStackCart() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} />,
            headerStyle: {
              backgroundColor: '#FFFFFF',
              borderBottomWidth: 1,
              borderBottomColor: '#000',
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStackCart;
