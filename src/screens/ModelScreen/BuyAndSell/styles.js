import {StyleSheet} from 'react-native';
import {width} from '../../../utils/tools';

const styles = StyleSheet.create({
  buyAndSellPosition: {
    alignItems: 'center',
    backgroundColor: '#fff',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#C5C5C5',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: width,
    paddingTop: 20,
  },
  buttonContainner: {
    width: '95%',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3,
    borderColor: '#C5C5C5',
    borderWidth: 1,
    paddingTop: 5,
  },
  middlePriceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 5,
  },
  buttonGray: {
    alignItems: 'center',
    backgroundColor: '#585858',
    borderRadius: 5,
    paddingVertical: 3,
    width: width / 5,
    justifyContent: 'center',
    height: '100%',
  },
  buttonGreen: {
    alignItems: 'center',
    backgroundColor: '#296142',
    borderRadius: 5,
    paddingVertical: 3,
    width: width / 3,
    justifyContent: 'center',
  },
  buttonRed: {
    alignItems: 'center',
    backgroundColor: '#C83D27',
    borderRadius: 5,
    paddingVertical: 3,
    width: width / 3,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  colorBlack: {
    color: '#18110C',
  },
  colorGray: {
    color: '#C4C4C4',
  },
  labelContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: -10,
    zIndex: 1,
  },
  buttonTextSmall: {
    fontSize: 13,
    color: '#fff',
  },
});

export default styles;
