import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {get} from 'lodash';
import {RNCamera} from 'react-native-camera';
import {launchImageLibrary} from 'react-native-image-picker';
import {Jost400, Jost500} from '../../components/StyledText';
import WatchGuide from '../../assets/watch-guide.svg';
import {figmaHeight, height, width} from '../../utils/tools';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

const CameraScreen = ({navigation, route}) => {
  const {setFieldValue} = route.params;
  const cameraRef = useRef();
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);

  const takePicture = async () => {
    const options = {quality: 0.5, base64: true};
    try {
      const data = await cameraRef.current.takePictureAsync(options);
      setFieldValue(data.uri);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFlashMode = () => {
    const {on, off, auto} = RNCamera.Constants.FlashMode;
    if (flashMode === on) setFlashMode(off);
    else if (flashMode === off) setFlashMode(auto);
    else setFlashMode(on);
  };

  const openImageLibrary = () => {
    launchImageLibrary({mediaType: 'photo', selectionLimit: 1}, result => {
      const uri = get(result, 'assets[0].uri', '');
      setFieldValue(uri);
      navigation.goBack();
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        ref={cameraRef}
        flashMode={flashMode}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        autoFocus={RNCamera.Constants.AutoFocus.on}
      />
      <View style={styles.maskingContainer}>
        <Jost500 style={styles.guideText}>
          Use guides to align your watches position to perfect spot
        </Jost500>
        <WatchGuide height={height / 2} />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={toggleFlashMode}
              style={styles.flashButton}>
              <FlashIconDecider flashMode={flashMode} />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture} style={styles.capture}>
              <MaterialIcons name="photo-camera" color="white" size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={openImageLibrary}>
            <Jost400 style={styles.addFromLibrary}>ADD FROM LIBRARY</Jost400>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const FlashIconDecider = ({flashMode}) => {
  const {on, off, auto} = RNCamera.Constants.FlashMode;
  if (flashMode === on)
    return <MCI name="flash-circle" color="white" size={24} />;
  else if (flashMode === off)
    return <MCI name="flash-off" color="white" size={24} />;
  else return <MCI name="flash-auto" color="white" size={24} />;
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  maskingContainer: {
    paddingVertical: figmaHeight(24),
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  guideText: {
    fontSize: 14,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: figmaHeight(14),
  },
  flashButton: {
    height: figmaHeight(60),
    width: figmaHeight(60),
    borderRadius: figmaHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    right: width / 3,
  },
  capture: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: figmaHeight(60),
    width: figmaHeight(60),
    borderRadius: figmaHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  addFromLibrary: {
    fontSize: 14,
    color: 'white',
  },
});
