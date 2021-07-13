import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 120,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
  },
});

export default styles;
