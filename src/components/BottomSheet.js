import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import {Jost600} from './StyledText';
import {width, height} from '../utils/tools';

const BottomSheet = React.forwardRef(({title, children}, ref) => {
  return (
    <RBSheet
      ref={ref}
      closeOnDragDown={true}
      dragFromTopOnly={true}
      height={height - 100}
      customStyles={{
        container: containerCustomStyle,
        draggableIcon: {display: 'none'}, // The Draggable Icon (If you set closeOnDragDown to true)
      }}>
      <TouchableOpacity
        onPress={() => ref.current.close()}
        style={closeButtonStyle}>
        <MaterialIcons name="close" size={10} color={colors.primary} />
      </TouchableOpacity>
      <Jost600 style={titleStyle}>{title}</Jost600>
      {children}
    </RBSheet>
  );
});

const {containerCustomStyle, closeButtonStyle, titleStyle} = StyleSheet.create({
  containerCustomStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
  },
  closeButtonStyle: {
    backgroundColor: colors.almostWhite,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  titleStyle: {
    fontSize: 24,
    marginTop: 30,
    marginBottom: 18,
    textAlign: 'center',
  },
});

export default BottomSheet;
