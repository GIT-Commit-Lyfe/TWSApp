import React, {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../../../constants/colors';
import {Jost400, Jost600} from '../../StyledText';
import ArrowLeft from '../../../assets/arrow-left.svg';
import FilterSelection from '../FilterSelection';

const DetailedFilterSelections = ({setOpenedFilter, openedFilter, formik}) => {
  const {name, label} = openedFilter;
  const items = detailedFilterItemsDecider(name);
  const [innerOpenedFilter, setInnerOpenedFilter] = useState('');

  if (innerOpenedFilter) {
    return (
      <DetailedFilterSelections
        setOpenedFilter={setInnerOpenedFilter}
        openedFilter={innerOpenedFilter}
        formik={formik}
      />
    );
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.titleContainer}>
        <Jost600 style={styles.title}>{label}</Jost600>
        <TouchableOpacity>
          <Jost400 style={styles.reset}>Reset All</Jost400>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity
          onPress={() => setOpenedFilter('')}
          style={styles.arrowContainer}>
          <ArrowLeft />
        </TouchableOpacity>
        <FlatList
          data={items}
          keyExtractor={(_, index) => index}
          bounces={false}
          renderItem={({item, index}) => {
            const {
              label: itemLabel,
              name: itemName,
              value,
              min_value,
              max_value,
            } = item;
            const modifiedName = `${name}_${itemName}`;
            const modifiedLabel = `${label} ${itemLabel}`;
            const modifiedObject = {name: modifiedName, label: modifiedLabel};
            const onSelectionPress = () => {
              if (value) {
                console.log(name, value, 'ini valkue nya');
                return;
              }
              setInnerOpenedFilter(modifiedObject);
            };

            return (
              <FilterSelection
                onPress={onSelectionPress}
                name={modifiedName}
                label={itemLabel}
                selectionValue={value}
                minValue={min_value}
                maxValue={max_value}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default DetailedFilterSelections;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: colors.greyFA,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.greyC5,
  },
  title: {
    fontSize: 24,
    lineHeight: 34.68,
    color: colors.primary,
    width: '80%',
  },
  reset: {fontSize: 13, lineHeight: 18.79},
  bodyContainer: {flexDirection: 'row'},
  arrowContainer: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.greyC5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const detailedFilterItemsDecider = filter => {
  console.log(filter, 'ini filter nya');
  switch (filter) {
    case 'case':
      return [
        {name: 'material', label: 'Material'},
        {name: 'diameter', label: 'Diameter'},
        {name: 'lug_width', label: 'Lug Width'},
      ];
    case 'case_material':
      return [
        {
          name: 'stainless_steel',
          value: 'stainless_steel',
          label: 'Stainless Steel',
        },
        {
          name: 'yellow_gold',
          value: 'yellow_gold',
          label: 'Yellow Gold',
        },
        {
          name: 'data_entry',
          value: 'data_entry',
          label: 'Data Entry',
        },
        {
          name: 'data_entry',
          value: 'data_entry',
          label: 'Data Entry',
        },
        {
          name: 'data_entry',
          value: 'data_entry',
          label: 'Data Entry',
        },
        {
          name: 'data_entry',
          value: 'data_entry',
          label: 'Data Entry',
        },
      ];
    case 'bezel':
      return [
        {name: 'material', label: 'Material'},
        {name: 'color', label: 'Color'},
      ];
    case 'bezel_color':
      return [
        {name: 'black', value: 'black', label: 'Black'},
        {name: 'green', value: 'green', label: 'Green'},
        {name: 'blue', value: 'blue', label: 'Blue'},
        {name: 'black_red', value: 'black_red', label: 'Black/Red'},
        {name: 'blue_red', value: 'blue_red', label: 'Blue/Red'},
        {name: 'data_entry', value: 'data_entry', label: 'Data Entry'},
      ];
    case 'dial':
      return [
        {name: 'style', label: 'Style'},
        {name: 'color', label: 'Color'},
        {name: 'index_material', label: 'Index Material'},
      ];
    case 'crystal':
      return [
        {name: 'sapphire', value: 'sapphire', label: 'Sapphire'},
        {
          name: 'sapphire_with_cyclops',
          value: 'sapphire_with_cyclops',
          label: 'Sapphire with Cyclops',
        },
        {name: 'plexiglass', value: 'plexiglass', label: 'Plexiglass'},
        {name: 'mineral_glass', value: 'mineral_glass', label: 'Mineral Glass'},
        {name: 'plastic', value: 'plastic', label: 'Plastic'},
        {name: 'data_entry', value: 'data_entry', label: 'Data Entry'},
      ];
    case 'strap':
      return [
        {name: 'material', label: 'Material'},
        {name: 'color', label: 'Color'},
      ];
    case 'movement':
      return [
        {name: 'type', label: 'Type'},
        {name: 'functions', label: 'Functions'},
        {name: 'caliber_number', label: 'Caliber Number'},
      ];
    case 'year':
      return [
        {
          name: 'start_year',
          label: 'Start',
          min_value: 1982,
          max_value: 2021,
          value: 1982,
        },
        {
          name: 'end_year',
          label: 'End',
          min_value: 1982,
          max_value: 2021,
          value: 2021,
        },
      ];
    case 'price':
      return [
        {
          name: 'minimum_price',
          label: 'Minimum',
          min_value: 4500,
          max_value: 64500,
          value: 4500,
          type: 'price',
        },
        {
          name: 'maximum_price',
          label: 'Maximum',
          min_value: 4500,
          max_value: 64500,
          value: 64500,
          type: 'price',
        },
      ];

    default:
      return [];
  }
};
