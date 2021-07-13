import React, {useState} from 'react';
import {Text, View, SafeAreaView, TextInput, StyleSheet, Button} from 'react-native';

export default ({route, navegation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <SafeAreaView style={styles.container}>
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o nome"
        value={user.name}
      />
      <Text>Endereço</Text>
      <TextInput
        style={style.input}
        onChangeText={endereco => setUser({...user, endereco})}
        placeholder="Informe o endereço do cliente"
        value={user.endereco}
      />
      <Text>Endereço entrega</Text>
      <TextInput
        style={style.input}
        onChangeText={enderecoEntrega => setUser({...user, enderecoEntrega})}
        placeholder="Informe o endereço de entrega"
        value={user.enderecoEntrega}
      />
    </View>
    </SafeAreaView>
  );
};


