import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFF',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginVertical: 20,
  },
});

export default styles;
