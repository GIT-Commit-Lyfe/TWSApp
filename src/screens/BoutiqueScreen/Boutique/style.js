import {StyleSheet} from 'react-native';
import {figmaWidth} from '../../../utils/tools';

const BoutiqueStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: figmaWidth(20),
  },
  boutiqueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 35,
  },
  boutiqueImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  flex: {flex: 1},
  separator: {width: 10},
  titleText: {fontSize: 18, fontWeight: '600', marginBottom: 5},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonBlack: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#000',
    padding: 10,
    flex: 1,
  },
  buttonWhite: {
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  primaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  primaryGhostText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default BoutiqueStyles;
