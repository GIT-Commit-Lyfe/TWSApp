import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, width} from '../../utils/tools';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
  },
  innerContainer: {
    paddingHorizontal: 10,
  },
  contentContainer: {flex: 1, justifyContent: 'space-between'},
  median: {
    fontSize: 11,
    color: colors.grey58,
  },
  medianPrice: {
    fontSize: 36,
    position: 'relative',
    bottom: figmaHeight(6),
    marginBottom: figmaHeight(20),
  },
  dropdownSelection: {padding: 10, borderWidth: 1, borderColor: colors.greyE6},
  dropdownText: {},
  transactionDetailsContainer: {
    marginTop: figmaHeight(16),
    marginBottom: figmaHeight(8),
  },
  transactionDetailsInnerContainer: {
    borderBottomColor: colors.greyCD,
    borderBottomWidth: 1,
  },
  transactionItemsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: figmaHeight(8),
  },
  transactionTotalContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: figmaHeight(8),
  },
  itemLabel: {fontSize: 12},
  itemValue: {fontSize: 12, textAlign: 'right'},
  totalLabel: {fontSize: 12},
  totalValue: {fontSize: 12, textAlign: 'right'},
  footNote: {fontSize: 10, textAlign: 'right'},
  buttonContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  button: {width: '100%'},
});

export default styles;
