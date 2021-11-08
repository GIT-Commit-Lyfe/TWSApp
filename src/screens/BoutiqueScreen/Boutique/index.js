import React from 'react';

import PropTypes from 'prop-types';

import {View} from 'react-native';

import BoutiqueStyles from './style';
import {BasicHeader} from '../../../components/Headers';
import {DualButton} from '../../../components/Buttons';
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

      <DualButton textLeft="Follow Boutique" textRight="Contact" />
    </View>
  );
};

Boutique.propTypes = {
  boutique: PropTypes.object,
};

export default Boutique;
