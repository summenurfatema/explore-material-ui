import { Rating, Typography } from '@mui/material';
import React from 'react';

const Ratings = () => {
    return (
        <div>
            <Typography component="legend">Rating</Typography>
            <Typography component="legend">Controllable</Typography>

            <Rating name="simple-controlled"></Rating>
            <Typography component="legend">Read Only</Typography>

            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            <Typography component="legend">Disabled</Typography>

            <Rating name="disabled" disabled />
        </div>
    );
};

export default Ratings;