import {StyleSheet} from 'react-native';
import {figmaHeight, figmaWidth} from '../../utils/tools';

const PopularBrandsStyles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    paddingHorizontal: figmaWidth(10),
    flex: 1,
  },
  searchBarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: figmaHeight(6),
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
