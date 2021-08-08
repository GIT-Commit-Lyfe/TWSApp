import {StyleSheet} from 'react-native';
import {width} from '../../utils/tools';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
  },
  innerContainer: {
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 24,
  },
  greyBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  list: {
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 0.5,
    paddingVertical: 11,
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,

    paddingVertical: 10,
  },
});

export default styles;
