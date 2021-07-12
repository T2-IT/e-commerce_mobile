import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyTabs from '../TabNavigation';
import MyStackLogin from '../StackNavigation/Login/login';
import MyStackCart from '../StackNavigation/Cart/cart';
import MyStackHome from '../StackNavigation/Home/home';
import DrawerContent from './content';
import MyStackProducts from '../StackNavigation/Products/products';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen name="Home" component={MyStackHome} />
      <Drawer.Screen name="Products" component={MyStackProducts} />
      <Drawer.Screen name="Login" component={MyStackLogin} />
      <Drawer.Screen name="Cart" component={MyStackCart} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
