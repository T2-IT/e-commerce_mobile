import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowcontainer: {
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 15,
    color: '#000',
  },
  text: {
    fontSize: 20,
    marginHorizontal: 15,
    marginVertical: 15,
    color: '#1a1a1a',
  },
  delete: {
    alignSelf: 'flex-end',
    padding: 8,
    fontSize: 15,
  },
  imageContainer: {
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFF',
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginVertical: 20,
  },
  total: {
    marginTop: 20,
    marginLeft: 20,
    width: '30%',
    fontSize: 25,
    borderRadius: 8,
    color: '#000000',
  },
  buttonFinalizar: {
    backgroundColor: '#000',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginLeft: 20,
    borderRadius: 7,
  },
  finalizarText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  subTotal: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    color: '#999999',
  },
});

export default styles;
