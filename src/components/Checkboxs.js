import React from 'react';
import { Checkbox } from '@mui/material';

const Checkboxs = () => {
    return (
        <div>
            <h3>Check box</h3>
            <Checkbox />
            <Checkbox defaultChecked />
            <Checkbox disabled />
            <Checkbox defaultChecked disabled />
        </div>
    );
};

export default Checkboxs;