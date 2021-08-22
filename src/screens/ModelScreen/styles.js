import {StyleSheet} from 'react-native';
import {figmaHeight} from '../../utils/tools';

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingVertical: figmaHeight(10),
  },
  modelScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
  },
  horizontalPadding: {
    paddingHorizontal: 10,
  },
  separator: {
    height: 34,
  },
});

export default styles;
