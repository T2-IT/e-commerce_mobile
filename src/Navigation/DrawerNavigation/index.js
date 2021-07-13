import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyStackLogin from '../StackNavigation/Login/login';
import MyStackCart from '../StackNavigation/Cart/cart';
import MyStackHome from '../StackNavigation/Home/home';
import DrawerContent from './content';
import MyStackProducts from '../StackNavigation/Products/products';
import MyStackSignUp from '../StackNavigation/SingUp/singup';
import MyStackCheckOut from '../StackNavigation/Checkout/checkout';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MyStackHome} />
      <Drawer.Screen name="Products" component={MyStackProducts} />
      <Drawer.Screen name="Login" component={MyStackLogin} />
      <Drawer.Screen name="Cart" component={MyStackCart} />
      <Drawer.Screen name="SingUp" component={MyStackSignUp} />
      <Drawer.Screen name="Checkout" component={MyStackCheckOut} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
