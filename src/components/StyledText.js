import React from 'react';
import {Text, Platform} from 'react-native';
import colors from '../constants/colors';

export function Jost100({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-Thin',
          color: colors.primary,
        },
        style,
      ]}
    />
  );
}

export function Jost200({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-ExtraLight',
          color: colors.primary,
        },
        style,
      ]}
    />
  );
}

export function Jost300({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-Light',
          color: colors.primary,
        },
        style,
      ]}
    />
  );
}

export function Jost400({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-Regular',
          color: colors.primary,
        },
        style,
      ]}
    />
  );
}

export function Jost500({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-Medium',
          color: colors.primary,
        },
        style,
      ]}
    />
  );
}

export function Jost600({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-SemiBold',
          color: colors.primary,
        },
        style,
      ]}
    />
  );
}

export function Jost700({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-Bold',
          color: colors.primary,
        },
        style,
      ]}
    />
  );
}

export function Jost800({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-ExtraBold',
          color: colors.primary,
        },
        style,
      ]}
    />
  );
}

export function Jost900({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-Black',
          color: colors.primary,
        },
        style,
      ]}
    />
  );
}
