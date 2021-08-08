import React from 'react';
import {times} from 'lodash';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BasicButton} from '../../components/Buttons';
import {Jost300, Jost400, Jost500, Jost600} from '../../components/StyledText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import colors from '../../constants/colors';

const SuccessScreen = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.innerContainer}>
          <Jost600 style={styles.title}>Success</Jost600>
          <Jost400 style={styles.header}>Your bid is live</Jost400>

          <Jost600 style={styles.subheader}>Remember</Jost600>
          <Reminders
            data={[
              'When a seller accepts your Bid, the transaction will be processed instantly.',
              'You can modify your Bid at any time before it is accepted by a seller.',
              'All watches are 100% authentic, guaranteed, or your money back.',
            ]}
          />

          <Jost600 style={styles.subheader}>Share your Bid</Jost600>
          <Jost400 style={styles.goShare}>
            Tell your friends! Tap below yo share your Bid.
          </Jost400>

          <View style={styles.shareLinks}>
            <TouchableOpacity
              style={{...styles.logoContainer, backgroundColor: '#425893'}}>
              <FontAwesome name="facebook" color="white" size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.logoContainer, backgroundColor: '#6BAAE8'}}>
              <FontAwesome name="twitter" color="white" size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.logoContainer,
                backgroundColor: colors.greyButton,
              }}>
              <FontAwesome name="envelope" color="white" size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.logoContainer,
                backgroundColor: colors.greyButton,
              }}>
              <FontAwesome name="twitch" color="white" size={16} />
            </TouchableOpacity>
          </View>
        </View>
        <BasicButton text="Next" onPress={handleNext} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Reminders = ({data}) => {
  return times(data.length, index => {
    return (
      <Jost600 key={index} style={styles.reminders}>
        {`${index + 1}. `}
        <Jost400 style={styles.reminderText}>{data[index]}</Jost400>
      </Jost600>
    );
  });
};

export default SuccessScreen;
