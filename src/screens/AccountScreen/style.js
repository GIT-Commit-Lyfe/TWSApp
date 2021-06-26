import {StyleSheet} from 'react-native';

const AccountsStyles = StyleSheet.create({
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
    fontSize: 16,
    marginBottom: 5,
  },
  menuDescriptionn: {
    fontSize: 12,
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderTopColor: '#D1D1D1',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default AccountsStyles;
