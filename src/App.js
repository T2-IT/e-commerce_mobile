import React from 'react';
import MyDrawer from './Navigation/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
