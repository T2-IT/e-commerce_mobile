import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../../pages/Login';
import Header from '../../../Components/Header';

const Stack = createStackNavigator();

function MyStackLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
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

export default MyStackLogin;
