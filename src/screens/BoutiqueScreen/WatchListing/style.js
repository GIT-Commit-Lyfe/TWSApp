import {StyleSheet} from 'react-native';

const WatchListingStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  filterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
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
  filterText: {
    fontWeight: '600',
    fontSize: 24,
  },
  textContainer: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  titleText: {fontSize: 18, fontWeight: '600', marginBottom: 5},
  watchListContainer: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'space-between',
  },
});

export default WatchListingStyles;
