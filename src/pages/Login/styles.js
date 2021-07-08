import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282a36',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },

  input: {
    backgroundColor: '#f8f8f2',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  buttonSubmit: {
    backgroundColor: '#8be9fd',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  submitText: {
    color: '#f8f8f2',
    fontSize: 18,
  },

  buttonRegister: {
    marginTop: 15,
  },

  registerText: {
    color: '#f8f8f2',
  },
});

export default styles;
