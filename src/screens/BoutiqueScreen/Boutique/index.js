import React from 'react';

import PropTypes from 'prop-types';

import {View} from 'react-native';

import BoutiqueStyles from './style';
import {BasicHeader} from '../../../components/Headers';
import {BasicButton} from '../../../components/Buttons';
import colors from '../../../constants/colors';

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
        <BasicButton
          text="Follow Boutique"
          backgroundColor="white"
          textColor={colors.primary}
          containerStyle={BoutiqueStyles.flex}
        />
        <View style={BoutiqueStyles.separator} />
        <BasicButton text="Contact" containerStyle={BoutiqueStyles.flex} />
      </View>
    </View>
  );
};

Boutique.propTypes = {
  boutique: PropTypes.object,
};

export default Boutique;
