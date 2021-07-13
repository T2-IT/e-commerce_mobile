import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../../../pages/SignUp';
import Header from '../../../Components/Header';

const Stack = createStackNavigator();

function MyStackSignUp() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
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

export default MyStackSignUp;
