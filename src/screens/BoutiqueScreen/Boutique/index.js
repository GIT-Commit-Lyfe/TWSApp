import React from 'react';

import PropTypes from 'prop-types';

import {upperCase} from 'lodash';

import {Image, Text, TouchableOpacity, View} from 'react-native';

import BoutiqueStyles from './style';

import {Jost400, Jost600} from '../../../components/StyledText';

const Boutique = ({boutique}) => {
  return (
    <View style={BoutiqueStyles.container}>
      <View style={BoutiqueStyles.boutiqueContainer}>
        <Image
          style={BoutiqueStyles.boutiqueImage}
          source={{uri: boutique.avatar}}
        />

        <View style={BoutiqueStyles.textContainer}>
          <Jost600 style={BoutiqueStyles.titleText}>
            {upperCase(boutique.boutiqueName)}
          </Jost600>
          <Jost400>{boutique.description}</Jost400>
        </View>
      </View>

      <View style={BoutiqueStyles.buttonContainer}>
        <TouchableOpacity style={BoutiqueStyles.primaryGhost}>
          <Jost600 style={BoutiqueStyles.primaryGhostText}>Follow Boutique</Jost600>
        </TouchableOpacity>

        <TouchableOpacity style={BoutiqueStyles.primary}>
          <Jost600 style={BoutiqueStyles.primaryText}>Contact</Jost600>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Boutique.propTypes = {
  boutique: PropTypes.object,
};

export default Boutique;
