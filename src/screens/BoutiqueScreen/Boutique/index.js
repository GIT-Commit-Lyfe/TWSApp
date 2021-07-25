import React from 'react';

import PropTypes from 'prop-types';

import {upperCase} from 'lodash';

import {Image, Text, TouchableOpacity, View} from 'react-native';

import BoutiqueStyles from './style';

import {Jost400, Jost600} from '../../../components/StyledText';

import {BasicHeader} from '../../../components/Headers';

const Boutique = ({boutique}) => {
  const {avatar, boutiqueName, description} = boutique;
  return (
    <View style={BoutiqueStyles.container}>
      <BasicHeader
        imageUri={avatar}
        title={boutiqueName}
        description={description}
      />

      <View style={BoutiqueStyles.buttonContainer}>
        <TouchableOpacity style={BoutiqueStyles.primaryGhost}>
          <Jost600 style={BoutiqueStyles.primaryGhostText}>
            Follow Boutique
          </Jost600>
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
