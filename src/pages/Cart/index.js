import React, {useContext, useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import CartContext from '../../context/CartContext';
import styles from './styles';

const Cart = ({navigation}) => {
  const context = useContext(CartContext);

  const valorTotal = context.produtos
    .reduce((total, prod) => total + prod.item.valorUnitario, 0)
    .toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Itens no Carrinho</Text>
      <FlatList
        data={context.produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.rowcontainer}>
              <View style={styles.imageContainer}>
                <Image source={{uri: item.item.url}} style={styles.image} />
              </View>
              <Text style={styles.title}>{item.item.nome}</Text>
              <Text style={styles.text}>R$ {item.item.valorUnitario}</Text>
            </View>
          );
        }}
      />
      <View>
        <Text style={styles.subTotal}>SUBTOTAL: </Text>
        <Text style={styles.total}>R$ {valorTotal}</Text>
      </View>
      <TouchableOpacity style={styles.buttonFinalizar}>
        <Text
          style={styles.finalizarText}
          onPress={() => navigation.navigate('Checkout')}>
          Finalizar Pedido
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
