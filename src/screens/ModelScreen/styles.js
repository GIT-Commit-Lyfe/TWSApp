import {StyleSheet} from 'react-native';
import {figmaHeight, figmaWidth} from '../../utils/tools';

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingTop: figmaHeight(10),
    paddingBottom: figmaHeight(150),
  },
  modelScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
  },
  horizontalPadding: {
    paddingHorizontal: figmaWidth(10),
  },
  separator: {
    height: 34,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: figmaHeight(30),
    justifyContent: 'space-between',
    paddingHorizontal: figmaWidth(10),
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
});

export default styles;
