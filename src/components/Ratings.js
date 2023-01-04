import { Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Ratings = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <div>
                    <h2>Rating</h2>
                    <Typography component="legend">Controllable</Typography>

                    <Rating name="simple-controlled"></Rating>
                    <Typography component="legend">Read Only</Typography>

                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <Typography component="legend">Small size</Typography>
                    <Rating name="size-small" defaultValue={2} size="small" />

                    <Typography component="legend">Large</Typography>
                    <Rating name="size-large" defaultValue={2} size="large" />
                    <Typography component="legend">10 stars</Typography>
                    <Rating name="customized-10" defaultValue={2} max={10} />

                    <Typography component="legend">Disabled</Typography>

                    <Rating name="disabled" disabled />
                </div>
            </Grid>
            <Grid item xs={4}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div>1</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>2</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>3</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>4</div>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>



    );
};

export default Ratings;
