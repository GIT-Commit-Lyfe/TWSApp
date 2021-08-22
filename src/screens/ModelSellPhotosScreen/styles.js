import {StyleSheet} from 'react-native';
import {figmaHeight, height, width} from '../../utils/tools';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
  },
  innerContainer: {
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
  },
  greyBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  list: {
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 0.5,
    paddingVertical: 11,
  },
  additionalShots: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: figmaHeight(26),
  },
  addText: {fontSize: 14, lineHeight: figmaHeight(20), marginLeft: 4},
  buttonContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  button: {width: '100%'},
});

export default styles;
