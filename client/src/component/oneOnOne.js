import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles';
const OneOnOne = () => {

    const classes = useStyles()

    return (
        <div>
            <div className={classes.workshopHeader}>
                <h2 className={classes.workshopTitle}>One-On-One </h2>
                <h2 >workshop</h2>
            </div>
            <Typography
                className={classes.workshopContent} >
                הסדנה האישית כוללת בין היתר סדר
                <br />
                בתיק האיפור שלך
                <br />
                למידה על איפור יום יומי נכון,
                <br />
                טיפים לשדרוג הלוק,
                <br />
                אבחון גוון וסוג עור הפנים המלצות על מוצרים
                <br />
                מערך הסדנה:<br />
                19:00-21:00
            </Typography>
        </div>
    )
}

export default OneOnOne;