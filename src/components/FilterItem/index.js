import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FilterItemStyles from './style';
import {Jost400, Jost600} from '../StyledText';
import colors from '../../constants/colors';

const FilterItem = ({filter}) => {
  return (
    <TouchableOpacity style={FilterItemStyles.filterItem}>
      <Jost400 style={FilterItemStyles.filterItemText}>{filter}</Jost400>
      <MaterialIcons name="close" size={13} color={colors.primary} />
    </TouchableOpacity>
  );
};

FilterItem.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default FilterItem;
