import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Checkout from '../../../pages/Checkout';
import Header from '../../../Components/Header';

const Stack = createStackNavigator();

function MyStackCheckOut() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Checkout"
        component={Checkout}
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

export default MyStackCheckOut;
