import React from 'react';
import PropTypes from 'prop-types';
import {upperCase} from 'lodash';

import {Image, View, Text, TouchableOpacity} from 'react-native';

import TransparentCardStyles from './style';
import {Jost300, Jost400, Jost500, Jost600} from '../StyledText';
import {formatCurrency} from '../../utils/tools';

const TransparentCard = ({content, index}) => {
  return (
    <TouchableOpacity
      style={{
        ...TransparentCardStyles.transparentCardContainer,
        marginLeft: index % 2 ? 5 : 10,
        marginRight: index % 2 ? 10 : 5,
      }}>
      <Jost500 style={TransparentCardStyles.transparentCardAlias}>
        {`(${content.code})${content.reference}`}
        {content.SECode && `-${content.SECode}`}
      </Jost500>
      <Image
        style={TransparentCardStyles.transparentCardImage}
        source={{uri: content.modelUrl}}
      />

      <Jost500 style={TransparentCardStyles.transparentCardName}>
        {`${upperCase(content.brand)} "${content.significantEdition}"`}
        {`\n${content.collection} (${content.year})`}
      </Jost500>

      <Jost300 style={TransparentCardStyles.transparentCardCondition}>
        {content.condition + ' Condition'}
      </Jost300>

      <Jost300 style={TransparentCardStyles.transparentCardCondition}>
        {content.accomodation}
      </Jost300>

      <Jost500 style={TransparentCardStyles.transparentCardPrice}>
        {formatCurrency(content.price)}
      </Jost500>

      <Jost300 style={TransparentCardStyles.transparentCardAuthentication}>
        Incl. Chronobase Authentication
      </Jost300>

      <View style={TransparentCardStyles.transparentCardFooter}>
        <Jost600 style={TransparentCardStyles.transparentCardSeller}>
          {content.sellerType}
        </Jost600>
        <Jost300 style={TransparentCardStyles.transparentCardLocation}>
          {`${content.country}, ${content.city}`}
        </Jost300>
      </View>
    </TouchableOpacity>
  );
};

TransparentCard.propTypes = {
  content: PropTypes.object.isRequired,
};

export default TransparentCard;
