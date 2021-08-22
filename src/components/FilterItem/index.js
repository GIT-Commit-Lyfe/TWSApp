import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';

import FilterItemStyles from './style';
import {Jost400, Jost600} from '../StyledText';

const FilterItem = ({filter}) => {
  return (
    <TouchableOpacity style={FilterItemStyles.filterItem}>
      <Jost400 style={FilterItemStyles.filterItemText}>{filter}</Jost400>
      <Jost400 style={FilterItemStyles.filterItemTextClose}>X</Jost400>
    </TouchableOpacity>
  );
};

FilterItem.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default FilterItem;
