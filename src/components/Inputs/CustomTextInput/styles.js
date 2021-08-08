import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../constants/colors';
import {figmaHeight, figmaWidth} from '../../../utils/tools';

const styles = StyleSheet.create({
  textInputDefaultStyle: {
    paddingVertical: figmaHeight(10),
    paddingHorizontal: figmaWidth(16),
    fontFamily: 'Jost-Bold',
    borderWidth: 1,
    borderColor: colors.greyE6,
  },
});
export default styles;
