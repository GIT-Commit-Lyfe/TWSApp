import {StyleSheet} from 'react-native';

const PopularListStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderTopColor: '#C5C5C5',
    borderTopWidth: 1,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 15,
  },
});

export default PopularListStyles;
