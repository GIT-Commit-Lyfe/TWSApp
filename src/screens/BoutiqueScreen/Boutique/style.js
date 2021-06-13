import {StyleSheet} from 'react-native';

const BoutiqueStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  boutiqueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 35,
  },
  textContainer: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  titleText: {fontSize: 18, fontWeight: '600', marginBottom: 5},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primary: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#000',
    padding: 10,
    width: 170,
  },
  primaryGhost: {
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    width: 170,
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
