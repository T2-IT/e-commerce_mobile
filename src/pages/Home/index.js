import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';

const Texto = () => (
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 60}}>
    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
    <View>
      <Text style={{width: 40, textAlign: 'center'}}>OU</Text>
    </View>
    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  </View>
);

const Home = ({navigation}) => (
  <SafeAreaView>
    <View style={styles.button_Login}>
      <TouchableOpacity
        color="#000"
        onPress={() => Alert.alert('Pagina de login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.button_Login}>
      <TouchableOpacity
        title="Cadastro"
        color="#000"
        onPress={() => Alert.alert('Página de Cadastro')}
      />
    </View>
    <View>
      <Texto />
    </View>
    <View style>
      <TouchableOpacity
        title="Produtos"
        color="#000"
        onPress={() => navigation.navigate('Products')}
        style={styles.button_produtos}>
        <Text>Produtos</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default Home;
