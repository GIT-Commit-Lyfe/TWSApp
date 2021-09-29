import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {width} from '../../utils/tools';

const styles = StyleSheet.create({
  buyAndSellSummaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  middleBottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4,
    borderColor: '#C5C5C5',
    borderWidth: 1,
    paddingTop: 5,
  },
  middlePriceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4,
    borderColor: '#C5C5C5',
    borderWidth: 1,
    paddingTop: 5,
    backgroundColor: 'grey',
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  colorBlack: {
    color: colors.primary,
  },
  colorGray: {
    color: colors.greyC5,
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
