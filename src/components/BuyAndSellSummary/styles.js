import {StyleSheet} from 'react-native';
import {width} from '../../utils/tools';

const styles = StyleSheet.create({
  buyAndSellSummaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignItems: 'center',
    marginVertical: 15,
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: '#C5C5C5',
    borderWidth: 1,
    paddingTop: 5,
  },
  buttonGray: {
    alignItems: 'center',
    backgroundColor: '#585858',
    borderRadius: 5,
    paddingVertical: 3,
    width: width / 5,
    justifyContent: 'center',
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
