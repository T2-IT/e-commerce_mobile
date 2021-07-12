import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

function Header({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <AntDesign name="bars" size={24} color="#000" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

export default Header;
