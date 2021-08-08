import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {launchImageLibrary} from 'react-native-image-picker';
import {Jost400, Jost500} from '../../components/StyledText';
import WatchGuide from '../../assets/watch-guide.svg';
import {figmaHeight, height} from '../../utils/tools';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CameraScreen = ({navigation, route}) => {
  const {setFieldValue} = route.params;
  const cameraRef = useRef();

  const takePicture = async () => {
    const options = {quality: 0.5, base64: true};
    const data = await cameraRef.current.takePictureAsync(options);
    setFieldValue(data.uri);
    navigation.goBack();
  };

  const openImageLibrary = () => {
    launchImageLibrary({mediaType: 'photo', selectionLimit: 1}, result => {
      const {fileName, uri} = result.assets[0];
      console.log(result);
      setFieldValue(uri);
      navigation.goBack();
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
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
          <TouchableOpacity onPress={takePicture} style={styles.capture}>
            <MaterialIcons name="photo-camera" color="white" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openImageLibrary}>
            <Jost400 style={styles.addFromLibrary}>ADD FROM LIBRARY</Jost400>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
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
  capture: {
    flex: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  addFromLibrary: {
    fontSize: 14,
    color: 'white',
  },
});
