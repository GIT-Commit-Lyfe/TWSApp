import React from 'react';
import PropTypes from 'prop-types';

import {Image, View, Text, TouchableOpacity} from 'react-native';

import TransparentCardStyles from './style';

const TransparentCard = ({content}) => {
  return (
    <TouchableOpacity style={TransparentCardStyles.transparentCardContainer}>
      <Text style={TransparentCardStyles.transparentCardAlias}>
        {content.alias}
      </Text>
      <Image
        style={TransparentCardStyles.transparentCardImage}
        source={{uri: content.profile_pict}}
      />

      <Text style={TransparentCardStyles.transparentCardName}>
        {content.name}
      </Text>

      {content.conditions.length > 0 &&
        content.conditions.map(condition => (
          <Text style={TransparentCardStyles.transparentCardCondition}>
            {condition}
          </Text>
        ))}

      <Text style={TransparentCardStyles.transparentCardPrice}>
        {content.price}
      </Text>

      <View style={TransparentCardStyles.transparentCardFooter}>
        <Text style={TransparentCardStyles.transparentCardSeller}>
          {content.seller}
        </Text>
        <Text style={TransparentCardStyles.transparentCardLocation}>
          {content.location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

TransparentCard.propTypes = {
  content: PropTypes.object.isRequired,
};

export default TransparentCard;
