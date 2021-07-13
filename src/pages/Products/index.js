import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import stylesProduto from './styles';
import CartContext from '../../context/CartContext';

const ListagemProdutos = () => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {addProduto} = useContext(CartContext);

  useEffect(() => {
    getProdutos();
  }, []);

  getProdutos = () => {
    setIsLoading(true);
    axios
      .get('https://residencia-ecommerce.herokuapp.com/produto')
      .then(response => {
        //console.log(response.data);
        setProdutos(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <View style={stylesProduto.containerAct}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <FlatList
          data={produtos}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={stylesProduto.container}>
                <View style={stylesProduto.imageContainer}>
                  <Image source={{uri: item.url}} style={stylesProduto.image} />
                </View>
                <View>
                  <Text style={stylesProduto.titleText}>{item.nome}</Text>
                </View>
                <View>
                  <Text style={stylesProduto.descriptionText}>
                    {item.descricao}
                  </Text>
                </View>
                <View style={stylesProduto.priceContainer}>
                  <Text style={stylesProduto.price}>
                    R$ {item.valorUnitario}
                  </Text>
                </View>
                <View style={stylesProduto.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => addProduto({item})}
                    style={stylesProduto.button}>
                    <Text style={stylesProduto.buttonText}>
                      Adicionar ao Carrinho
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default ListagemProdutos;
