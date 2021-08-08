import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth, width} from '../../utils/tools';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
  },
  innerContainer: {
    paddingHorizontal: 10,
  },
  contentContainer: {justifyContent: 'space-between'},
  title: {
    fontSize: 24,
  },
  expirationPeriod: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: figmaHeight(12),
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greyCD,
  },
  middleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: figmaHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.greyCD,
  },
  buttonTitle: {
    fontSize: 14,
    color: colors.grey58,
  },
  footNote: {fontSize: 10, textAlign: 'right'},
  paymentContainer: {
    marginTop: figmaHeight(16),
    paddingVertical: figmaHeight(16),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.greyCD,
  },
  paymentTextContainer: {
    flex: 1,
    marginLeft: figmaWidth(10),
  },
  buttonContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  button: {width: '100%'},
});

export default styles;
