import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <Image
          style={{width: 500, height: 300}}
          source={{
            uri: 'https://img.wallpapersafari.com/desktop/1440/900/38/68/SEyFka.jpg',
          }}
        />
      </View>
      <View style={{marginVertical: 20, marginLeft: 50, marginRight: 40}}>
        <Text style={{fontSize: 20, marginVertical: 5, alignItems: 'center'}}>
          Aplicativo focado na venda de itens esportivos e totalmente limitados.
        </Text>
        <Text style={{fontSize: 20, marginVertical: 5, alignItems: 'center'}}>
          Loja para quem muda o jogo, quem só faz parte e para quem ainda dará
          seus primeiros toques em uma bola. É a comunidade que está melhorando
          e levando o esporte para o futuro.
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          marginHorizontal: 20,
          backgroundColor: '#FFF',
          borderRadius: 15,
          alignItems: 'center',
          marginBottom: 50,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            width: 170,
            height: 50,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Products')}>
          <Text style={styles.buttonText}>Ver produtos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
