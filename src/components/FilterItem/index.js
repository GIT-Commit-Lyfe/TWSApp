import React from 'react';
import PropTypes from 'prop-types';

import {Text, TouchableOpacity} from 'react-native';

import FilterItemStyles from './style';

const FilterItem = ({filter}) => {
  return (
    <TouchableOpacity style={FilterItemStyles.filterItem}>
      <Text style={FilterItemStyles.filterItemText}>{filter}</Text>
      <Text style={FilterItemStyles.filterItemTextClose}>X</Text>
    </TouchableOpacity>
  );
};

FilterItem.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default FilterItem;
