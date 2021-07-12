import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Products from '../../../pages/Products';
import Header from '../../../Components/Header';

const Stack = createStackNavigator();

function MyStackProducts() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsStack"
        component={Products}
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

export default MyStackProducts;
