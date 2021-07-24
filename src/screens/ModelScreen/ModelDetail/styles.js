import {StyleSheet} from 'react-native';
import {width} from '../../../utils/tools';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  halveWidth: {
    width: width / 2,
  },
  flexRow: {
    flexDirection: 'row',
  },
  copywriting: {
    marginBottom: 15,
  },
  statusText: {
    fontSize: 13,
    color: '#585858',
  },
  nameText: {
    fontSize: 24,
    color: '#18110C',
  },
  aliasText: {
    fontSize: 18,
    color: '#18110C',
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  combobox: {
    marginBottom: 7,
  },
  label: {
    color: '#585858',
    fontSize: 14,
  },
  price: {
    color: '#18110C',
    fontSize: 36,
  },
  updown: {
    color: '#18110C',
    fontSize: 11,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  buttonWhite: {
    borderColor: '#18110C',
    borderWidth: 1,
    width: width / 2 - 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonWhiteText: {
    color: '#18110C',
  },
  buttonBlack: {
    backgroundColor: '#18110C',
    width: width / 2 - 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonBlackText: {
    color: '#fff',
  },
});

export default styles;
