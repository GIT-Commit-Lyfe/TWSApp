import React from 'react';
import Toast, {BaseToast} from 'react-native-toast-message';
import MyApp from './src';
import colors from './src/constants/colors';
import {BannerContextProvider} from './src/contexts/bannerContext';
import {WatchlistContextProvider} from './src/contexts/watchlistContext';
import {figmaHeight} from './src/utils/tools';

export default function App() {
  return (
    <>
      <BannerContextProvider>
        <WatchlistContextProvider>
          <MyApp />
        </WatchlistContextProvider>
      </BannerContextProvider>
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </>
  );
}

const toastConfig = {
  /* 
    overwrite 'success' type, 
    modifying the existing `BaseToast` component
  */
  success: ({text1, text2, props, ...rest}) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: colors.primary, marginTop: figmaHeight(20)}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontFamily: 'Jost-Medium',
        fontSize: 12,
        color: colors.primary,
      }}
      text2Style={{
        fontFamily: 'Jost-Regular',
        color: colors.primary,
      }}
      text1={text1}
      text2={text2}
    />
  ),
};
