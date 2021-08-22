import {StyleSheet} from 'react-native';

const PopularBrandsStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
  },
  searchBarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  textInput: {
    backgroundColor: '#EEEEEF',
    paddingVertical: 9,
    borderRadius: 10,
    paddingLeft: 8,
    width: '73%',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#18110C',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 40,
  },
  whiteText: {
    color: '#fff',
  },
});

export default PopularBrandsStyles;
