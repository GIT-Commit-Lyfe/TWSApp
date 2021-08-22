import React, {useRef, useState, useEffect} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {withFormikControl} from 'react-native-formik';
import {Jost300, Jost500, Jost600} from '../../StyledText';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {figmaHeight, height} from '../../../utils/tools';
import colors from '../../../constants/colors';
import RBSheet from 'react-native-raw-bottom-sheet';

const FilterSelection = ({label, items, setFieldValue, currentValues}) => {
  const bottomSheetRef = useRef();

  const categoryOnPress = () => {
    bottomSheetRef.current.open();
  };

  return (
    <View style={filterCategoryContainer}>
      <TouchableOpacity onPress={categoryOnPress} style={titleButtonContainer}>
        <Jost500 style={filterTitleText}>{label}</Jost500>
        <MaterialIcons
          name={'chevron-right'}
          size={figmaHeight(15)}
          color={colors.primary}
        />
      </TouchableOpacity>
      <FilterButtons items={currentValues} />
      <MoreSelectionModal
        ref={bottomSheetRef}
        setFieldValue={setFieldValue}
        currentValues={currentValues}
        items={items}
        label={label}
      />
    </View>
  );
};

const MoreSelectionModal = React.forwardRef(
  ({label, items, setFieldValue, currentValues = []}, ref) => {
    const handlePress = item => {
      const applied = currentValues.some(i => i.value === item.value);
      if (applied) {
        setFieldValue(currentValues.filter(i => i.value !== item.value));
      } else {
        setFieldValue([...currentValues, item]);
      }
    };

    const handleClose = () => {
      ref.current.close();
    };

    return (
      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        height={height - 100}
        customStyles={{
          container: containerCustomStyle,
          draggableIcon: {display: 'none'},
        }}>
        <TouchableOpacity onPress={handleClose} style={filterCloseButtonStyle}>
          <MaterialIcons name="expand-more" size={40} color={colors.primary} />
        </TouchableOpacity>

        <View style={filterTitleContainer}>
          <Jost600 style={titleStyle}>{label}</Jost600>
        </View>
        <FlatList
          keyExtractor={(_, index) => index}
          data={items}
          renderItem={({item}) => {
            const applied = currentValues.some(i => i.value === item.value);
            return (
              <TouchableOpacity
                onPress={() => handlePress(item)}
                style={{
                  ...filterCategoryContainer,
                  backgroundColor: applied ? colors.almostWhite : 'white',
                }}>
                <View style={titleButtonContainer}>
                  <Jost500 style={filterTitleText}>{item.label}</Jost500>
                  {applied && <MaterialIcons name="close" />}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </RBSheet>
    );
  },
);

const FilterButtons = ({items}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index}
      data={items}
      renderItem={({item: filterItem, index}) => {
        const isFirst = index === 0;
        return (
          <TouchableOpacity
            style={{
              ...filterItemContainer,
              backgroundColor: colors.greyE6,
              marginLeft: isFirst ? 0 : 10,
            }}>
            <Jost300>{filterItem.label}</Jost300>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default withFormikControl(FilterSelection);

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
