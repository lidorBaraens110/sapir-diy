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

const Group = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.workshopHeader}>
                <h2 className={classes.workshopTitle}>Group</h2>
                <h2 >workshop</h2>
            </div>
            <Typography className={classes.workshopContent} >
                סדנה בקבוצות- עד 4 משתתפות בקבוצה.<br />
                יש להגיע עם תיק האיפור שלך.<br />
                מערך הסדנה:<br />
                18:30 - קבלת פנים ונשנושים<br />
                19:00 - הסבר הדגמה והמלצה על מוצרים<br />
                20:00 - החלק המעשי DIY<br />
                21:00 - סיום
            </Typography>
        </div>
    )
}

export default Group;