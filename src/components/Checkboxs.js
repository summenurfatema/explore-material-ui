import React from 'react';
import { Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



const Checkboxs = () => {
    return (
        <div>
            <h3>Check box</h3>
            <Checkbox />
            <Checkbox defaultChecked />
            <Checkbox disabled />
            <Checkbox defaultChecked disabled />
            <Checkbox
                defaultChecked
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}
            />





            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox

                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
            />
        </div>
    );
}







export default Checkboxs;