import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

export default function Checkout({navigation}) {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff', flex: 1, paddingVertical: '20%'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Fontisto
            name="angelist"
            color="#000"
            size={60}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}
          />
        </View>
        <View style={styles.container}>
          <TextInput placeholder="Informe o nome" style={styles.input} />

          <TextInput
            placeholder="Informe o endereço do cliente"
            style={styles.input}
          />

          <TextInput
            placeholder="Informe o endereço de entrega"
            style={styles.input}
          />
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginHorizontal: 10,
            marginTop: 30,
            paddingHorizontal: 20,
            paddingTop: 10,
            borderTopColor: '#000',
            borderTopWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#999999',
            }}>
            Escolha uma forma de pagamento
          </Text>
        </View>
        <RadioButton.Group>
          <View style={styles.containerButtonRadios}>
            <Text>Pagamento boleto</Text>
            <RadioButton value="boleto" />
            <Text>Pagamento Cartão de crédito</Text>
            <RadioButton value="credito" />
            <Text>Pagamento Pix</Text>
            <RadioButton value="pix" />
          </View>
        </RadioButton.Group>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {Alert.alert('Compra realiazada com sucesso!') 
            navigation.navigate('Home')
            }}>
            <Text style={styles.buttonText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
