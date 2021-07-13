import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    rowcontainer: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 20,
      marginRight: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
    },
    title: {
      marginTop: 20,
      marginLeft: 20,
      fontSize: 30,
      
    },
    text: {
      padding: 10,
      fontSize: 20,
      color: '#1a1a1a',
    },
    delete: {
      alignSelf: 'flex-end',
      padding: 8,
      fontSize: 15,
    },
    image: {
      width: 400,
      height: 400,
      marginLeft:0,
    },
    total:{
      marginTop: 20,
      marginLeft: 20,
      width:'30%',
      fontSize: 30,
      borderRadius:8,
      color:'#000000'
      

    
    },
    buttonFinalizar: {
      backgroundColor: '#000',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginLeft: 20,
      borderRadius:7,
    },
  
    finalizarText: {
      color: '#FFFFFF',
      fontSize: 18,
      

    },
    subTotal:{
      marginTop: 20,
      marginLeft: 20,
      fontSize: 30,
     color:'#999999',
    
     
    }
  });

export default styles;
  