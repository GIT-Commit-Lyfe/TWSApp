import {StyleSheet} from 'react-native';
import {figmaWidth, width} from '../../../utils/tools';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  halveWidth: {
    flex: 0.5,
  },
  selectionContainer: {
    paddingRight: figmaWidth(20),
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
    borderColor: '#18110C',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 10,
    paddingVertical: 5,
    width: '90%',
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    flex: 1,
    borderColor: '#18110C',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonWhiteText: {
    color: '#18110C',
  },
  buttonBlack: {
    flex: 1,
    backgroundColor: '#18110C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonBlackText: {
    color: '#fff',
  },
  spacer: {
    width: figmaWidth(12),
  },
  headingSheet: {
    marginBottom: 15,
  },
});

export default styles;
