import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  filterCloseButtonStyle: {alignItems: 'center'},
  radioButton: {
    justifyContent: 'flex-start',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyCD,
  },
  radioButtonText: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  radioIcon: {
    marginRight: 15,
  },
  headerConntainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyCD,
  },
  titleStyle: {
    fontSize: 24,
    textAlign: 'center',
  },
  filterCategoryContainer: {
    paddingVertical: 9,
    paddingHorizontal: 13,
  },
  titleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterTitleText: {
    color: colors.grey58,
    fontSize: 14,
  },
  filterItemContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  line: {height: 1, backgroundColor: colors.greyCD},
});

export default styles;
