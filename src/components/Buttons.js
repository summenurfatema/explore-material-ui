import React from 'react';
import { Button } from '@mui/material';

const Buttons = () => {
    return (
        <div>
            <h3>Button</h3>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </div>
    );
};

export default Buttons;