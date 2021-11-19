import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {height} from '../../utils/tools';
import {Jost500, Jost600} from '../StyledText';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

const SortModal = React.forwardRef(
  ({title = 'Sort By', handleSort, sortBy}, ref) => {
    const data = [
      {
        label: 'Date Added: Newest - Oldest',
        key: 'newest_date',
      },
      {
        label: 'Date Added: Oldest - Newest',
        key: 'oldest_date',
      },
      {
        label: 'Market Price: High - Low',
        key: 'highest_market',
      },
      {
        label: 'Market Price: Low - High',
        key: 'lowest_market',
      },
      {
        label: 'Release Date: Newest - Oldest',
        key: 'newest',
      },
      {
        label: 'Release Date: Oldest - Newest',
        key: 'oldest',
      },
      {
        label: 'Popularity',
        key: 'popularity',
      },
      {
        label: 'Last Sale',
        key: 'last_sale',
      },
      {
        label: 'Total Sold',
        key: 'total',
      },
      {
        label: 'Price Volatality',
        key: 'price',
      },
    ];

    const onSort = value => {
      handleSort(value);
      ref.current.close();
    };

    return (
      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        height={height}
        customStyles={{
          draggableIcon: {display: 'none'},
        }}>
        <SafeAreaView style={filterTitleContainer}>
          <View style={headerConntainer}>
            <Jost600 style={titleStyle}>{title}</Jost600>

            <TouchableOpacity
              onPress={() => ref.current.close()}
              style={filterCloseButtonStyle}>
              <MaterialIcons name="close" size={40} color={colors.primary} />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {data.map(item => (
              <TouchableOpacity
                onPress={() => onSort(item.key)}
                style={radioButton}>
                <View style={radioButtonText}>
                  {sortBy === item.key ? (
                    <MaterialIcons
                      name="radio-button-checked"
                      size={20}
                      color={colors.primary}
                      style={radioIcon}
                    />
                  ) : (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={20}
                      color={colors.primary}
                      style={radioIcon}
                    />
                  )}

                  <Jost500>{item.label}</Jost500>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>
      </RBSheet>
    );
  },
);

export default SortModal;

const {
  filterCloseButtonStyle,
  filterTitleContainer,
  titleStyle,
  headerConntainer,
  radioButton,
  radioButtonText,
  radioIcon,
} = styles;
