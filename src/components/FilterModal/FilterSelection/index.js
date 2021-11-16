import React, {useRef, useState, useEffect} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckboxBlank from '../../../assets/checkbox-blank.svg';
import ArrowRight from '../../../assets/arrow-right-black.svg';
import {withFormikControl} from 'react-native-formik';
import {Jost300, Jost500, Jost600} from '../../StyledText';
import styles from './styles';
import {figmaHeight, formatCurrency, height} from '../../../utils/tools';
import colors from '../../../constants/colors';
import SliderInput from '../../Inputs/SliderInput';
import CustomTextInput from '../../Inputs/CustomTextInput';

const FilterSelection = ({
  label,
  value: formikValue,
  selectionValue: value,
  name,
  minValue,
  maxValue,
  type = '',
  onPress = () => {},
  currentValues,
  setFieldValue,
}) => {
  const [textInputValue, setTextInputValue] = useState(String(value));

  useEffect(() => {
    if (!formikValue && value) setFieldValue(Number(value));
  }, []);

  useEffect(() => {
    setTextInputValue(String(formikValue));
  }, [formikValue]);

  const isPrice = type === 'price';

  const onTextInputChange = value => {
    setTextInputValue(String(value));
    setFieldValue(Number(value));
  };

  return (
    <View style={filterCategoryContainer}>
      {minValue ? (
        <View>
          <Jost500 style={filterTitleText}>{label}</Jost500>
          <CustomTextInput
            value={textInputValue}
            onChange={onTextInputChange}
            keyboardType="number-pad"
            style={{
              marginTop: 7,
              marginBottom: 20,
              fontFamily: 'Jost-Medium',
              color: colors.grey76,
            }}
          />
          <SliderInput
            name={name}
            minValue={minValue}
            maxValue={maxValue}
            style={{width: '90%', alignSelf: 'center'}}
          />
        </View>
      ) : (
        <>
          <TouchableOpacity onPress={onPress} style={titleButtonContainer}>
            <Jost500 style={filterTitleText}>{label}</Jost500>
            {value ? <CheckboxBlank /> : <ArrowRight height={15} />}
          </TouchableOpacity>
          <FilterButtons items={currentValues} />
        </>
      )}
    </View>
  );
};

const SelectionItems = React.forwardRef(
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
      <>
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
      </>
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
