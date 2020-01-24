import React from 'react';

import Card from 'Components/Card';
import Ocr from 'App/Components/Camera';
export const DLFrontForm = () => {
    return (
        <Card headerDecription="Take a picture of your driver’s license," typeDecription="First the front" >
            <Ocr />
        </Card>

    );
};
