import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth, width} from '../../utils/tools';

const styles = StyleSheet.create({
  flex: {flex: 1},
  combobox: {
    borderColor: '#18110C',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 10,
    paddingVertical: 5,
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#585858',
    fontSize: 14,
  },
  headingSheet: {
    marginBottom: 15,
    paddingHorizontal: figmaWidth(10),
    fontSize: 16,
  },
  selectionContainer: {
    flex: 1,
  },
  selectionItem: {
    paddingHorizontal: figmaWidth(10),
    paddingVertical: figmaHeight(5),
    borderColor: colors.greyC5,
    borderBottomWidth: 0.5,
  },
});

export default styles;
