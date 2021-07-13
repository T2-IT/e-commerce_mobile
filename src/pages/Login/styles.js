import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    marginVertical: 20,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },

  input: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
  },

  buttonSubmit: {
    backgroundColor: '#000',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  buttonRegister: {
    color: '#999999',
  },

  registerText: {
    marginTop: 20,
    fontSize: 15,
    color: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
