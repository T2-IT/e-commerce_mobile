import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyStackHome from '../StackNavigation/Home/home';
import MyStackProducts from '../StackNavigation/Products/products';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#000',
        inactiveTintColor: '#9e9e9e',
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={MyStackHome}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={25} />,
          title: () => {
            return (
              <View>
                <Text>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProductsStack"
        component={MyStackProducts}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="store-alt" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default MyTabs;
