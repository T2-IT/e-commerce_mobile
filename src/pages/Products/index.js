import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Button } from 'native-base';
import { View, ActivityIndicator, FlatList} from "react-native";
import axios from 'axios';
import stylesCard from './styles';
import stylesScroll from './styles';



/*export default class DisplayCard extends Component {
  render() {*/
    const DisplayCard = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => { }}>
          <Card>
            <CardItem style={{ height: 280, borderRadius: 4 }}>
              <Body>
                <Image
                  style={stylesCard.image}
                  resizeMode="cover"
                  source={{ uri: //INSERIR SOURCE DA IMAGEM }}
                />
                <Text style={{marginBottom: 10}}>
                    {props.title}
                </Text>
                <View style={{position: 'absolute', bottom: 0}}>
                  <Button style={{borderRadius: 4, backgroundColor: '#ca0a12',  width: 145, flexDirection: "row", justifyContent: "center"}}
                    onPress={() => {
                  }}>
                    <Text style={{color: 'white'}}>COMPRAR</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }


//export default class InfinitLoading extends Component {
  const InfinitLoading = () =>{
    
  state = {
    produtos: [],
    page: 1,
    limit: 10,
    loading: true,
    loadingMore: false,
    refreshing: false
  }
  // carrega mais itens
  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true
      }),
      () => {
        this.getProducts();
      }
    );
  };
  // carregando no rodapé
  _renderFooter = () => {
    if (!this.state.loadingMore) return null;
    return (
      <ActivityIndicator size="large" color="#ca0a12" />
    );
  };
  // quando o usuário puxa para baixo 
  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        limit: 10,
        refreshing: true
      },
      () => {
        this.getProducts();
      }
    );
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts () {
    const {page, limit } = this.state
    let url = //inserir url da api aqui!!!
    console.log(url)
    
    axios.get(url).then(response => {
      this.setState(() => ({
        produtos:
          page === 1
            ? Array.from(response.data.posts)
            : [...this.state.produtos, ...response.data.posts],
        loading: false,
        refreshing: false
      }));
    }).catch(e => {
    })
  }
  render() {
    return (
      <View style={stylesScroll.container}>
          {
            this.state.produtos.length > 0
            ? <FlatList
                ListFooterComponent={this._renderFooter}
                vertical={true}
                numColumns={2}
                contentContainerStyle={{
                  flexDirection: 'column'
                }}
                data={this.state.produtos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <View
                    style={{width: '50%'}}>
                    <DisplayCard title={item.title} imgUrl={item.feature_image}/>
                  </View>
                )}
                onEndReached={this._handleLoadMore}
                onEndReachedThreshold={0.5}
                initialNumToRender={10}
                onRefresh={this._handleRefresh}
                refreshing={this.state.refreshing}
              />
            : <ActivityIndicator size="large" color="#ca0a12" />
          }
      </View>
    );
  }
}

