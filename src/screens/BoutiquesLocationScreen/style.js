import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth, height, iosShadow} from '../../utils/tools';

const BoutiquesLocationStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  locationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.greyCD,
    elevation: 3,
    ...iosShadow,
    position: 'absolute',
    zIndex: 100,
    right: figmaWidth(18),
    bottom: height * 0.3 + figmaHeight(18),
  },
  sheetContainer: {
    paddingHorizontal: 20,
  },
  textInputContainer: {
    flex: 1,
    paddingVertical: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  copywriting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  textInput: {
    backgroundColor: '#EEEEEF',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 25,
  },
  boutiqueName: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 5,
    color: colors.primary,
  },
  address: {
    color: colors.grey58,
  },
  estimatedTime: {
    color: colors.primary,
    fontSize: 12,
  },
  distance: {
    color: colors.grey58,
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  line: {height: 1, backgroundColor: colors.lightGrey},
});

export default BoutiquesLocationStyles;
