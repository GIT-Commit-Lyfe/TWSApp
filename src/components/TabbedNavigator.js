import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import {Jost400, Jost600} from './StyledText';

export function ScrollingTabbedNavigator({data}) {
  const [componentShownIndex, setComponentShownIndex] = useState(0); // stores index of component to be shown
  return (
    <>
      <FlatList
        style={{
          paddingHorizontal: 10,
          marginBottom: 10,
          borderBottomColor: colors.lightGrey,
          borderBottomWidth: 1,
        }}
        data={data}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => {
          const selected = componentShownIndex === index;
          return (
            <TouchableOpacity onPress={() => setComponentShownIndex(index)}>
              <View
                style={{
                  marginRight: 50,
                  borderBottomColor: colors.primary,
                  borderBottomWidth: selected ? 2 : 0,
                  paddingBottom: 10,
                }}>
                <Jost400
                  style={{
                    color: selected ? colors.primary : colors.grey62,
                    fontSize: 16,
                  }}>
                  {item.title}
                </Jost400>
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {data[componentShownIndex].component}
    </>
  );
}

export function TabbedNavigator({data}) {
  const [componentShownIndex, setComponentShownIndex] = useState(0); // stores index of component to be shown

  return (
    <View style={{marginTop: 10, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        {data.map((item, index) => {
          const selected = componentShownIndex === index;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setComponentShownIndex(index)}>
              <View
                style={{
                  borderBottomColor: colors.primary,
                  borderBottomWidth: selected ? 2 : 0,
                  paddingBottom: 10,
                }}>
                <Jost400
                  style={{
                    color: selected ? colors.primary : colors.grey62,
                    fontSize: 16,
                  }}>
                  {item.title}
                </Jost400>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {data[componentShownIndex].component}
    </View>
  );
}

export function CapsulNavigator({data}) {
  const [componentShownIndex, setComponentShownIndex] = useState(0); // stores index of component to be shown
  const buttonWidth = 100 / 3;

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          backgroundColor: colors.greyF5,
          alignItems: 'center',
          borderRadius: 5,
          overflow: 'hidden',
        }}>
        {data.map((item, index) => {
          const selected = componentShownIndex === index;
          const isLast = index === data.length - 1;
          const isLastSelected = componentShownIndex === data.length - 1;
          const isFirstSelected = componentShownIndex === 0;
          const isFirst = index === 0;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setComponentShownIndex(index)}
              style={{
                width: `${100 / 3}%`,
                backgroundColor: selected ? colors.primary : colors.greyF5,
                borderRadius: selected ? 5 : 0,
                paddingVertical: 5,
                borderRightWidth: isFirst && isLastSelected ? 1 : 0,
                borderLeftWidth: isLast && isFirstSelected ? 1 : 0,
              }}>
              <Jost400
                style={{
                  color: selected ? 'white' : colors.primary,
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                {item.title}
              </Jost400>
            </TouchableOpacity>
          );
        })}
      </View>
      {data[componentShownIndex].component}
    </View>
  );
}
