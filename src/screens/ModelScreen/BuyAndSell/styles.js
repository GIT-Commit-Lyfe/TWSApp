import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {figmaHeight, width} from '../../../utils/tools';

const styles = StyleSheet.create({
  buyAndSellPosition: {
    alignItems: 'center',
    backgroundColor: '#fff',
    left: 0,
    bottom: 0,
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: colors.greyC5,
    justifyContent: 'center',
    width: width,
    paddingTop: 10,
  },
  buttonContainner: {
    width: '95%',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: figmaHeight(5),
  },
  buttonGray: {
    backgroundColor: colors.grey58,
    borderRadius: 5,
    paddingVertical: 3,
    flex: 0.25,
    marginHorizontal: 8,
  },
  greyInnerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGreen: {
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 5,
    paddingVertical: 3,
    flex: 0.4,
    justifyContent: 'center',
  },
  buttonRed: {
    alignItems: 'center',
    backgroundColor: colors.redButton,
    borderRadius: 5,
    paddingVertical: 3,
    flex: 0.4,
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
    paddingHorizontal: 2,
    top: -8,
    zIndex: 1,
  },
  buttonTextSmall: {
    fontSize: 10,
    color: '#fff',
  },
  blackText: {fontSize: 14, color: colors.primary},
  topContainer: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 3,
    flex: 0.4,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.greyC5,
  },
  topContainerMiddle: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 3,
    flex: 0.25,
    marginHorizontal: 8,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.greyC5,
  },
});

export default styles;
