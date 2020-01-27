import * as React from 'react';

import { ActivityIndicator, View, Text, SafeAreaView } from 'react-native';

import { RNCamera, RNCameraProps } from 'react-native-camera';
import { Colors } from 'App/Theme';

import styles from './style';
import { PureComponent } from 'react';

type Props = {
    flash?: 'off' | 'on' | 'auto' | 'torch',
    zoom?: number,
    autoFocus?: 'off' | 'on',
    depth?: number,
    type?: 'back' | 'front',
    whiteBalance?: RNCameraProps['whiteBalance'],
    ratio?: string,
    recordOptions?: {
        mute: boolean,
        maxDuration: 5,
        quality: any,
    },
    isRecording?: boolean,
    canDetectFaces?: boolean,
    canDetectText?: boolean,
    canDetectBarcode?: boolean,
    faces?: [],
    textBlocks?: [],
    barcodes?: RNCameraProps['barCodeTypes'],
    children?: React.ReactNode,
    passRef: any,

};

export default class Ocr extends PureComponent<Props> {
    camera: RNCamera | null | undefined;
    cameraNotAuthorized = () => (<Text
        style={styles.cameraNotAuthorized}>
        Camera access was not granted. Please go to your phone's settings and allow camera access.
            </Text>)

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            // console.log(data.uri);
        }
    }

    render() {
        const { type, flash, autoFocus, zoom, whiteBalance, ratio, depth } = this.props;
        return (
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={type}
                flashMode={flash}
                autoFocus={autoFocus}
                zoom={zoom}
                whiteBalance={whiteBalance}
                ratio={ratio}
                focusDepth={depth}
                captureAudio={false}
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
                onCameraReady={() => this.props.passRef(this.camera)}
                pendingAuthorizationView={
                    < SafeAreaView style={styles.cameraLoading} >
                        <ActivityIndicator color={Colors.error} />
                    </SafeAreaView >
                }
                notAuthorizedView={
                    < View >
                        {this.cameraNotAuthorized}
                    </View >
                }
            >
                <View style={{ flex: 1 }}>
                    <View style={styles.cameraTopLeft} />
                    <View style={styles.cameraTopRight} />
                    <View style={styles.cameraBottomRight} />
                    <View style={styles.cameraBottomLeft} />
                </View>
            </RNCamera>
        );
    }

}
