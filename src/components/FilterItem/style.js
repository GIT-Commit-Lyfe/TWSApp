import {StyleSheet} from 'react-native';

const FilterItemStyles = StyleSheet.create({
  filterItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterItem: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 3,
    marginRight: 5,
    borderColor: '#E7E8E8',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  filterItemTextClose: {
    marginLeft: 10,
    fontSize: 13,
  },
  filterItemText: {
    fontSize: 10,
  },
});

export default FilterItemStyles;
