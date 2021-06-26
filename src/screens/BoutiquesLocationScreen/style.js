import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const BoutiquesLocationStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flex: 1,
  },
  textInputContainer: {
    paddingVertical: 15,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  copywriting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  textInput: {
    backgroundColor: '#EEEEEF',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 25,
  },
  boutiqueName: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 5,
    color: colors.primary,
  },
  address: {
    color: colors.grey58,
  },
  estimatedTime: {
    color: colors.primary,
    fontSize: 12,
  },
  distance: {
    color: colors.grey58,
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  line: {height: 1, backgroundColor: colors.lightGrey},
});

export default BoutiquesLocationStyles;
