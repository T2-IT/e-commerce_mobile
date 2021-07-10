import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../../pages/Login';
import MyTabs from '../TabNavigation';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
