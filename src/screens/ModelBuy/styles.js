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
  buttonLeft: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buttonRight: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonBidGreen: {
    backgroundColor: '#296142',
    width: width / 2 - 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  buttonBidGrey: {
    backgroundColor: '#F5F5F5',
    borderColor: '#CDCDCD',
    borderWidth: 1,
    width: width / 2 - 10,
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
  buyContainer: {
    marginTop: 25,
    marginBottom: 5,
  },
  halveWidth: {
    width: width / 2 - 20,
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  blackButtonText: {
    color: '#fff',
  },
  buyTitleText: {
    fontSize: 14,
    marginBottom: 5,
  },
  buyDescriptionText: {
    fontSize: 12,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buyButton: {
    alignItems: 'center',
    borderColor: '#18110C',
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
    marginTop: 15,
  },
});

export default styles;
