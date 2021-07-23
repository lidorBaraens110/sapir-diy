import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { useStyles } from '../styles';

function Cards() {

    const classes = useStyles();

    return (
        <div className={classes.wrapCard}>
            <Card className={classes.card} >
                <Typography className={classes.typography} >איך אני מתאימה את גוון המייק-אפ הנכון?</Typography>
            </Card>
            <Card className={classes.card2} >
                <Typography className={classes.typography} >איך אני יוצרת מראה קליל?</Typography>
            </Card>
            <Card className={classes.card3} >
                <Typography className={classes.typography} >מה גוון הסומק המתאים לי?</Typography>
            </Card>
            <Card className={classes.card4} >
                <Typography className={classes.typography} >איך להתאפר ביום יום?</Typography>
            </Card>
            <Card className={classes.card5} >
                <Typography className={classes.typography} >מה הדרך הנכונה לאיפור הגבה?</Typography>
            </Card>
            <Card className={classes.card6} >
                <Typography className={classes.typography} >איך אני מצליחה להעלים כהויות?</Typography>
            </Card>
        </div>
    );
}

export default Cards;