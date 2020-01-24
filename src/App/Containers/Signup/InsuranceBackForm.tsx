import React from 'react';

import Card from 'Components/Card';
import Ocr from 'App/Components/Camera';

export const InsuranceBackForm = () => {
    return (
        <Card
            headerDecription="Take a picture of your Insurance card,"
            typeDecription="then the back"

        >
            <Ocr />
        </Card>
    );
};
