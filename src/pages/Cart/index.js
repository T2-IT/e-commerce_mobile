import React, {useContext, useState} from 'react';
import {View, SafeAreaView, FlatList, Text, Image} from 'react-native';
import CartContext from '../../context/CartContext';
import styles from './styles';

const Cart = () => {
  const context = useContext(CartContext);
  console.log(context.produtos);

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
              <Text style={styles.text}> {item.item.nome}</Text>
              <Image source={{uri: item.item.url}} style={styles.image} />
              <Text style={styles.text}>
                Valor: R$ {item.item.valorUnitario}
              </Text>
            </View>
          );
        }}
      />
      <View>
        <Text style={styles.title}>Total: </Text>
        <Text style={styles.total}>R$ {valorTotal}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
