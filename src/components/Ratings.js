import { FormControl, Grid, InputLabel, MenuItem, Rating, Select, Typography } from '@mui/material';
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
            <Typography component="legend">Grid</Typography>
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

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                ></Grid>
                <Typography component="legend">Select</Typography>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"

                        label="Age"

                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>


            </Grid>
        </Grid>



    );
};

export default Ratings;
