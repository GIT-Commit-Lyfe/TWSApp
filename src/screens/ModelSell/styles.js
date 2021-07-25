import {StyleSheet} from 'react-native';
import {width} from '../../utils/tools';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
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
  center: {
    alignItems: 'center',
    flex: 1,
    width: width,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#18110C',
    flex: 1,
    paddingVertical: 10,
    marginTop: 25,
    marginBottom: 5,
    width: width,
  },
  buttonText: {
    color: '#fff',
  },
});

export default styles;
