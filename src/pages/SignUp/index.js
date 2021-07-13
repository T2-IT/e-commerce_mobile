import React from 'react';
import {View, TextInput, TouchableOpacity, Alert, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

export default function SingUp({navigation}) {
  return (
    <View style={styles.container}>
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
      <TextInput placeholder="Email" style={styles.input}></TextInput>
      <TextInput placeholder="Confirmar Email" style={styles.input}></TextInput>
      <TextInput placeholder="Nome de Usuário" style={styles.input}></TextInput>
      <TextInput placeholder="Senha" style={styles.input}></TextInput>
      <TextInput placeholder="Confirmar Senha" style={styles.input}></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert('Cadastro realizado com sucesso!');
          navigation.navigate('Home');
        }}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
