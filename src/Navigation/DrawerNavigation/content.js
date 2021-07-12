import React from 'react';
import {View} from 'react-native';
import {Title, Drawer, Text} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Text>
                <Fontisto name="angelist" color="#000" size={40} />
              </Text>
              <View
                style={{
                  marginLeft: 20,
                  marginTop: 5,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Title style={styles.title}>T2 Store</Title>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('HomeStack');
              }}
            />
            <DrawerItem
              icon={({color}) => (
                <Fontisto name="shopping-store" color={color} size={21} />
              )}
              label="Store"
              onPress={() => {
                props.navigation.navigate('ProductsStack');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <AntDesign name="shoppingcart" color={color} size={size} />
              )}
              label="Cart"
              onPress={() => {
                props.navigation.navigate('Cart');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <AntDesign name="login" color={color} size={size} />
          )}
          label="Login"
          onPress={() => {
            props.navigation.navigate('Login');
          }}></DrawerItem>
      </Drawer.Section>
    </View>
  );
}

export default DrawerContent;
