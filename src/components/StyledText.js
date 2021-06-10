import React from 'react';
import {Text, Platform} from 'react-native';

export function Jost100({style, ...rest}) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Jost-Thin',
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
        },
        style,
      ]}
    />
  );
}
