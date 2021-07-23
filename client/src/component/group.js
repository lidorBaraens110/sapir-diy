import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles';

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