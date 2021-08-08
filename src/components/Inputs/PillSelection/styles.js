import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleCheckContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkStyle: {
    marginRight: 4,
  },
  bottomContainer: {
    marginBottom: 7,
  },
  selectedTextContainer: {
    paddingVertical: 3,
  },
  titleText: {
    color: colors.grey58,
  },
});
export default styles;
