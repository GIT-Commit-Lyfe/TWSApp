import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {width} from '../utils/tools';
import {LineChart} from 'react-native-chart-kit';
import {Jost400, Jost600} from './StyledText';
import colors from '../constants/colors';

export const PriceGraph = ({title}) => {
  const [selected, setSelected] = useState('allTime');
  const data = {
    allTime: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
    oneMonth: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
    threeMonth: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
    sixMonth: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
    year: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
    ytd: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  };
  return (
    <View>
      <View>
        <Jost600 style={styles.title}>{title}</Jost600>
        <LineChart
          data={{
            // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: data[selected],
              },
            ],
          }}
          width={width - 20} // from react-native
          height={180}
          yAxisLabel=""
          yAxisSuffix=" €"
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          chartConfig={{
            backgroundGradientFrom: '#000000',
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: '#000000',
            backgroundGradientToOpacity: 0,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0,0, ${opacity})`,
            fillShadowGradient: 'white',
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '1',
              strokeWidth: '1',
              stroke: '#000000',
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setSelected('allTime')}
          style={{
            ...styles.button,
            backgroundColor: selected === 'allTime' ? colors.primary : 'white',
          }}>
          <Jost600
            style={{
              ...styles.buttonText,
              color: selected === 'allTime' ? 'white' : colors.primary,
            }}>
            ALL
          </Jost600>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('oneMonth')}
          style={{
            ...styles.button,
            backgroundColor: selected === 'oneMonth' ? colors.primary : 'white',
          }}>
          <Jost600
            style={{
              ...styles.buttonText,
              color: selected === 'oneMonth' ? 'white' : colors.primary,
            }}>
            1M
          </Jost600>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('threeMonth')}
          style={{
            ...styles.button,
            backgroundColor: selected === 'threeMonth' ? colors.primary : 'white',
          }}>
          <Jost600
            style={{
              ...styles.buttonText,
              color: selected === 'threeMonth' ? 'white' : colors.primary,
            }}>
            3M
          </Jost600>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('sixMonth')}
          style={{
            ...styles.button,
            backgroundColor: selected === 'sixMonth' ? colors.primary : 'white',
          }}>
          <Jost600
            style={{
              ...styles.buttonText,
              color: selected === 'sixMonth' ? 'white' : colors.primary,
            }}>
            6M
          </Jost600>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('year')}
          style={{
            ...styles.button,
            backgroundColor: selected === 'year' ? colors.primary : 'white',
          }}>
          <Jost600
            style={{
              ...styles.buttonText,
              color: selected === 'year' ? 'white' : colors.primary,
            }}>
            1Y
          </Jost600>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('ytd')}
          style={{
            ...styles.button,
            backgroundColor: selected === 'ytd' ? colors.primary : 'white',
          }}>
          <Jost600
            style={{
              ...styles.buttonText,
              color: selected === 'ytd' ? 'white' : colors.primary,
            }}>
            YTD
          </Jost600>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 24, color: colors.primary},
  chart: {
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: colors.greyCD,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 12,
  },
});
