import {StyleSheet} from 'react-native';
import {width} from '../../../utils/tools';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#18110C',
    paddingVertical: 5,
    width: 160,
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
  },
});

export default styles;
