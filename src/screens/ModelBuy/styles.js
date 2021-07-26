import {StyleSheet} from 'react-native';
import {width} from '../../utils/tools';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  buttonBidContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  buttonBidGreen: {
    backgroundColor: '#296142',
    borderRadius: 20,
    width: width / 2,
    paddingVertical: 8,
    alignItems: 'center',
  },
  buttonBidGrey: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    width: width / 2,
    paddingVertical: 8,
    alignItems: 'center',
  },
  textWhite: {
    color: '#fff',
  },
  textBlack: {
    color: '#18110C',
  },
  textInput: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 15,
  },
  specList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 13,
    borderTopColor: '#C5C5C5',
    borderTopWidth: 1,
    marginBottom: 17,
  },
  tnc: {
    flex: 1,
    alignItems: 'flex-end',
  },
  blackButton: {
    backgroundColor: '#18110C',
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  blackButtonText: {
    color: '#fff',
  },
});

export default styles;
