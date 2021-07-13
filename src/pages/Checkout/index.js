import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import style from './styles';

export default function Checkout() {
  const [user, setUser] = useState(route.params ? route.params : {});
  const [value, setValue] = React.useState('boleto');
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
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <View>
            <Text>Pagamento boleto</Text>
            <RadioButton value="boleto" />
            <Text>Pagamento Cartão de crédito</Text>
            <RadioButton value="credito" />
            <Text>Pagamento Pix</Text>
            <RadioButton value="pix" />
          </View>
        </RadioButton.Group>
      </View>
    </SafeAreaView>
  );
}
