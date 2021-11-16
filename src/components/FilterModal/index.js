import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {get, upperFirst, upperCase, toUpper} from 'lodash';
import {capitalCase} from 'change-case';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {figmaHeight, height} from '../../utils/tools';
import {Jost300, Jost400, Jost500, Jost600} from '../StyledText';
import CloseIcon from '../../assets/close.svg';
import styles from './styles';
import {Formik} from 'formik';
import FilterSelection from './FilterSelection';
import {RoundedButton} from '../Buttons';
import DetailedFilterSelections from './DetailedFilterSelections';

const FilterModal = React.forwardRef(
  ({title = 'Refine Search', type, setFilters, filters}, ref) => {
    const items = filterItemDecider(type);

    const [openedFilter, setOpenedFilter] = useState('');

    const closeModal = () => {
      ref.current.close();
      setOpenedFilter('');
    };

    return (
      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        height={height - 100}
        customStyles={{
          container: containerCustomStyle,
          draggableIcon: {display: 'none'}, // The Draggable Icon (If you set closeOnDragDown to true)
        }}>
        <View style={filterTitleContainer}>
          <Jost600 style={titleStyle}>{title}</Jost600>
          <TouchableOpacity onPress={closeModal} style={filterCloseButtonStyle}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <Formik initialValues={{}} enableReinitialize={true}>
          {formikProps => {
            const {values, setFieldValue} = formikProps;
            console.log(values, 'ini values formik di filter modal');
            if (openedFilter) {
              return (
                <DetailedFilterSelections
                  setOpenedFilter={setOpenedFilter}
                  openedFilter={openedFilter}
                  formik={formikProps}
                />
              );
            }
            return (
              <View style={{flex: 1}}>
                <FlatList
                  data={items}
                  keyExtractor={(_, index) => index}
                  bounces={false}
                  renderItem={({item, index}) => {
                    const {name, label} = item;
                    return (
                      <FilterSelection
                        currentValues={get(values, name)}
                        onPress={() => setOpenedFilter(item)}
                        name={name}
                        label={label}
                      />
                    );
                  }}
                />
                <RoundedButton title="Apply Filters" lowerText="98 Models" />
              </View>
            );
          }}
        </Formik>
      </RBSheet>
    );
  },
);

const Line = () => <View style={line} />;
export default FilterModal;

const {
  containerCustomStyle,
  filterCloseButtonStyle,
  filterTitleContainer,
  titleStyle,
  filterCategoryContainer,
  titleButtonContainer,
  filterTitleText,
  filterItemContainer,
  line,
} = styles;

const filterItemDecider = type => {
  const commonFilters = [
    {name: 'case', label: 'Case'},
    {name: 'bezel', label: 'Bezel'},
    {name: 'dial', label: 'Dial'},
    {name: 'crystal', label: 'Crystal'},
    {name: 'strap', label: 'Strap / Bracelet'},
    {name: 'movement', label: 'Movement & Functions'},
    {name: 'year', label: 'Year'},
    {name: 'price', label: 'Price'},
  ];
  if (type === 'watchlist') {
    return [
      {name: 'brand', label: 'Brand'},
      {name: 'collection', label: 'Collection'},
      {name: 'model', label: 'Model'},
      ...commonFilters,
    ];
  }
  if (type === 'listing') {
    return [
      {name: 'brand', label: 'Brand'},
      {name: 'collection', label: 'Collection'},
      {name: 'model', label: 'Model'},
      ...commonFilters,
      {name: 'condition', label: 'Condition & Delivery Content'},
      {name: 'seller', label: 'Seller Type & Locaiton'},
    ];
  }
  if (type === 'collection') {
    return [...commonFilters];
  }
  if (type === 'brand') {
    return ['collection', ...commonFilters, 'female_only'];
  }
  if (type === 'boutique') {
    return ['location', 'transactions', 'price', 'inventory'];
  }
  return commonFilters;
};
