import { SafeAreaView } from 'react-navigation';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import { normalize } from 'App/Theme/Metrics';
import { RNCamera, RNCameraProps } from 'react-native-camera';
import { Colors } from 'App/Theme';
import React from 'react';

import styles from './style';

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
    chiildren?: React.ReactNode,
};

let Ocr = (props: Props, forwardedRef: any) => {
    const { type, flash, autoFocus, zoom, whiteBalance, ratio, depth } = props;
    const cameraNotAuthorized = <Text
        style={styles.cameraNotAuthorized}>
        Camera access was not granted. Please go to your phone's settings and allow camera access.
            </Text>;
    return (
        <RNCamera ref={ref => { forwardedRef = ref; }}
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
            pendingAuthorizationView={
                <SafeAreaView style={styles.cameraLoading}>
                    <ActivityIndicator color={Colors.error} />
                </SafeAreaView>
            }
            notAuthorizedView={
                <View>
                    {cameraNotAuthorized}
                </View>
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
};
Ocr = React.forwardRef<Props, React.RefForwardingComponent<typeof RNCamera>>(Ocr);

export default Ocr;
