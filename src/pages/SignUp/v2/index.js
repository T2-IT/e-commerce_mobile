import React, { Component } from 'reac'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
 } from 'react-native'

 class Register extends Component {
     state = {
         name: '',
         email: '',
         password: ''
     }
 }

 render() {
     return [
         <View styke={style,container}>
             <TextInput placeholder='Nome' style = {styles.input}
                autoFocus={true} value={this.state.name}
                onChangeText={name => this.setState ({ name })} />
            <TextInput placeholder='Email' style = {styles.input}
                keyboardYtpe='email-adress' value={this.state.email}
                onChangeText={email => this.setState ({ email })} /> 
            <TextInput placeholder='Senha' style={styles.input}
                secureTextEntry={true} value={this.setState({ password })} />
            <TouchableOpacity onPress={() => { }} style={styles.buttom}>
                <Text style={styles.buttomText}>Salvar</Text>
            </TouchableOpacity>
         </View>
     ]
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         alighnItems: 'center',
         justifyContent: 'center'
     },
     buttom: {
         maginTop: 30,
         padding: 10,
         backgroundColor: '#4286f4'
     },
     buttomText: {
         fontSize: 20,
         color: '#FFF'
     },
     input: {
         marginTop: 20,
         widht: '90%',
         backgroundColor: '#EEE',
         height: 40,
         borderWidth: 1,
         borderColor: '#333',
         paddingLeft: 15
     }
 })

 export default Register