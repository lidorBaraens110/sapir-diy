import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    workshopHeader: {
        padding: '0.5rem 0',
        marginTop: '2rem',
        marginBottom: '0',
        position: 'relative',
        display: 'inline-block',
        backgroundColor: 'white',
        borderRadius: '2rem',
        fontFamily: 'Montserrat ,sans-serif',
    },
    workshopTitle: {
        margin: 0
    },
    workshopContent: {
        color: 'black',
        lineHeight: '2rem',
        fontFamily: 'Assistant , sans-serif',
        fontWeight: '600',
        fontSize: '1.1rem',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }
    }
}))
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