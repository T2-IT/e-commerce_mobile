import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Checkout from '../../../pages/Checkout';
import Header from '../../../Components/Header';
import {color} from 'react-native-elements/dist/helpers';

const Stack = createStackNavigator();

function MyStackFinishPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CheckoutStack"
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

export default MyStackFinishPage;
