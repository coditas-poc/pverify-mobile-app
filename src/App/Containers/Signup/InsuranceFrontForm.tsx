import React from 'react';

import Card from 'Components/Card';
import Ocr from 'App/Components/Camera';
export const InsuranceFrontForm = () => {
    return (
        <Card
            headerDecription="Take a picture of your Insurance card,"
            typeDecription="First the front">
            <Ocr />
        </Card>
    );
};
