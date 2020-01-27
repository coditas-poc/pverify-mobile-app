import React, { forwardRef } from 'react';

import Card from 'Components/Card';
import Ocr from 'App/Components/Camera';
export const DLFrontForm = ((props: any) => {
    return (
        <Card headerDecription="Take a picture of your driver’s license," typeDecription="First the front" >
            <Ocr passRef={(cameraRef: any) => props.onCapture(cameraRef)}/>
        </Card>
    );
});
