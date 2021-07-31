import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {figmaHeight, height} from '../../utils/tools';
import {Jost300, Jost400, Jost500, Jost600} from '../StyledText';
import styles from './styles';

const FilterModal = React.forwardRef(
  ({title = 'Filters', setFilters, filters}, ref) => {
    const defaultFilters = [
      {
        category: 'Case Material',
        values: ['Stainless Steel', 'Bicolor Rose Gold'],
      },
      {
        category: 'Bezel Material',
        values: ['Ceramic', 'Aluminium', 'Gem-set'],
      },
      {
        category: 'Bezel Color',
        values: ['Black', 'Black / Blue'],
      },
      {
        category: 'Bracelet',
        values: ['Jubilee', 'Oyster', 'Black Crocodile'],
      },
      {
        category: 'Case Diameter',
        values: ['39 mm', '40 mm', '42 mm'],
      },
      {
        category: 'Crystal',
        values: ['Sapphire', 'Plexyglass'],
      },
      {
        category: 'Complications',
        values: ['Date', 'Chronograph', 'GMT'],
      },
      {
        category: 'Location of Watch',
        values: ['Germany', 'EU'],
      },
      {category: 'Custom Features'},
    ];
    const [appliedFilters, setAppliedFilters] = useState(defaultFilters);

    // removes / adds values according to what category and value is pressed
    const applyFilter = ({category, value}) => {
      const updatedFilters = appliedFilters.map(item => {
        if (item.category === category) {
          if (item.values.includes(value)) {
            const newValues = item.values.filter(
              existingValue => existingValue !== value,
            );
            return {category, values: newValues};
          } else {
            return {category, values: [...item.values, value]};
          }
        } else {
          return item;
        }
      });
      setAppliedFilters(updatedFilters);
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
        <TouchableOpacity
          onPress={() => ref.current.close()}
          style={filterCloseButtonStyle}>
          <MaterialIcons name="expand-more" size={40} color={colors.primary} />
        </TouchableOpacity>

        <View style={filterTitleContainer}>
          <Jost600 style={titleStyle}>{title}</Jost600>
        </View>
        <FlatList
          keyExtractor={(_, index) => index}
          data={defaultFilters}
          ItemSeparatorComponent={Line}
          ListFooterComponent={Line}
          renderItem={({item, index: categoryIndex}) => {
            return (
              <View style={filterCategoryContainer}>
                <View style={titleButtonContainer}>
                  <Jost500 style={filterTitleText}>{item.category}</Jost500>
                  <TouchableOpacity>
                    <MaterialIcons
                      name={'chevron-right'}
                      size={figmaHeight(15)}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                </View>
                <FilterButtons
                  item={item}
                  appliedFilters={appliedFilters}
                  categoryIndex={categoryIndex}
                  onPress={applyFilter}
                />
              </View>
            );
          }}
        />
      </RBSheet>
    );
  },
);

const FilterButtons = ({item, appliedFilters, categoryIndex, onPress}) => {
  return (
    <FlatList
      horizontal
      keyExtractor={(_, index) => index}
      data={item.values}
      renderItem={({item: filterItem, index}) => {
        const isFirst = index === 0;
        const isSelected =
          appliedFilters[categoryIndex]?.values.includes(filterItem);
        return (
          <TouchableOpacity
            onPress={() =>
              onPress({
                category: item.category,
                value: filterItem,
              })
            }
            style={{
              ...filterItemContainer,
              backgroundColor: isSelected ? colors.greyE6 : colors.almostWhite,
              marginLeft: isFirst ? 0 : 10,
            }}>
            <Jost300>{filterItem}</Jost300>
          </TouchableOpacity>
        );
      }}
    />
  );
};

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
