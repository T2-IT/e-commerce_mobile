import React from 'react';
import {StyleSheet} from 'react-native';

const stylesProduto = StyleSheet.create({
  container: {
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
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
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  descriptionText: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  price: {
    fontSize: 20,
    marginHorizontal: 15,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#000',
    width: 170,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
  },
});

export default stylesProduto;
