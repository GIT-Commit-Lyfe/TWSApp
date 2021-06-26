import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const AccountsStyles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: 'white'},
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
  menuName: {
    fontWeight: '600',
    fontSize: 14,
  },
  menuDescription: {
    fontSize: 12,
    color: colors.grey58,
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    flexDirection: 'row',
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {height: 1, backgroundColor: colors.lightGrey},
});

export default AccountsStyles;
