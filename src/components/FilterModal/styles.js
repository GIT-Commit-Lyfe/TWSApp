import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight} from '../../utils/tools';

const styles = StyleSheet.create({
  containerCustomStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: figmaHeight(16),
  },
  filterCloseButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    backgroundColor: '#FBFBFB',
    position: 'absolute',
    right: 14,
  },
  filterTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greyCD,
    paddingBottom: figmaHeight(16),
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
