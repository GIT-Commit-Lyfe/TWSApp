import React from 'react';
import PropTypes from 'prop-types';

import {Image, Text, TouchableOpacity, View} from 'react-native';

import BoutiqueStyles from './style';

const Boutique = ({boutique}) => {
  return (
    <View style={BoutiqueStyles.container}>
      <View style={BoutiqueStyles.boutiqueContainer}>
        <Image
          style={BoutiqueStyles.boutiqueImage}
          source={{uri: boutique.profile_pict}}
        />

        <View style={BoutiqueStyles.textContainer}>
          <Text style={BoutiqueStyles.titleText}>{boutique.name}</Text>
          <Text>{boutique.description}</Text>
        </View>
      </View>

      <View style={BoutiqueStyles.buttonContainer}>
        <TouchableOpacity style={BoutiqueStyles.primaryGhost}>
          <Text style={BoutiqueStyles.primaryGhostText}>Follow Boutique</Text>
        </TouchableOpacity>

        <TouchableOpacity style={BoutiqueStyles.primary}>
          <Text style={BoutiqueStyles.primaryText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Boutique.propTypes = {
  boutique: PropTypes.object,
};

export default Boutique;
