import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const WatchListingStyles = StyleSheet.create({
  container: {
    color: '#fff',
    paddingVertical: 20,
  },
  boutiqueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textContainer: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  titleText: {fontSize: 18, fontWeight: '600', marginBottom: 5},
  cardStyle: {
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {height: 10, width: 0},
    padding: 6,

    width: 130,
    height: 180,
    backgroundColor: colors.almostWhite,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default BoutiqueStyles;
