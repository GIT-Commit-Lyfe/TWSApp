import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import {Jost600, Jost400} from './StyledText';
import {height as screenHeight, statusBarHeight} from '../utils/tools';

const BottomSheet = React.forwardRef(
  ({title, subtitle = '', height = screenHeight - 100, children}, ref) => {
    const showSeparator = height === screenHeight;
    return (
      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        height={height}
        customStyles={{
          container: containerCustomStyle,
          draggableIcon: {display: 'none'}, // The Draggable Icon (If you set closeOnDragDown to true)
        }}>
        {showSeparator && <View height={statusBarHeight} />}
        <TouchableOpacity
          onPress={() => ref.current.close()}
          style={{
            ...closeButtonStyle,
            top: showSeparator ? 10 + statusBarHeight : 10,
          }}>
          <MaterialIcons name="close" size={10} color={colors.primary} />
        </TouchableOpacity>

        <View style={titleContainer}>
          <Jost600 style={titleStyle}>{title}</Jost600>
          {Boolean(subtitle) && (
            <Jost400 style={subtitleStyle}>{subtitle}</Jost400>
          )}
        </View>
        {children}
      </RBSheet>
    );
  },
);

const {
  containerCustomStyle,
  closeButtonStyle,
  titleContainer,
  titleStyle,
  subtitleStyle,
} = StyleSheet.create({
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
  titleContainer: {
    marginTop: 30,
    marginBottom: 18,
  },
  titleStyle: {
    fontSize: 24,
    textAlign: 'center',
  },
  subtitleStyle: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 18,
    textAlign: 'center',
  },
});

export default BottomSheet;
