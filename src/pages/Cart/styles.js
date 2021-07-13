import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#363636',
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
      color: '#525252',
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
      fontSize: 30,
      backgroundColor:	'#484848',
    
    }
  });

export default styles;
  