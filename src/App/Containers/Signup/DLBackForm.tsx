import React from 'react';

import Card from 'Components/Card';
import Ocr from 'App/Components/Camera';
export const DLBackForm = () => {
    return (
        <Card
            headerDecription="Take a picture of your driver’s license,"
            typeDecription="then the back" >
            <Ocr />
        </Card>
    );
};
