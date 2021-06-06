import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getNotifications} from '../redux/notification';

// Checks user credentials

export default function CheckAuth({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      console.log('halo');
    }, 500);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator />
    </View>
  );
}
