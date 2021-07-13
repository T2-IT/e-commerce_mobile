import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return(
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="informe o nome"
        value={user.name}
      />
      <Text>Sobrenome</Text>
      <TextInput
        style={style.input}
        onChangeText={lastname => setUser({...user, lastname})}
        placeholder="informe o sobrenome"
        value={user.lastname}
      />
      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChanceText={email => setUser({...user, email})}
        placeholder="informe o email"
        value={user.email}
      />
      <Text>Usuário</Text>
      <TextInput
        style={style.input}
        onChanceText={usuario => setUser({...user, usuario})}
        placeholder="informe o usuário"
        value={user.email}
      />
      <Text>Telefone</Text>
      <TextInput
        style={style.input}
        onChanceText={phone => setUser({...user, phone})}
        placeholder="informe o numero de telefone com DDD"
        value={user.phone}
      />
      <Button
        title="Cadastrar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>,
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
