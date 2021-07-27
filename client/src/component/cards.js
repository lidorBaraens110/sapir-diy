import React from 'react';
import { Typography, Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        width: '15rem',
        background: '#f3f3f3',
        position: 'absolute',
        right: 120,
        top: 110,
        padding: '0.2rem',
        [theme.breakpoints.down('xs')]: {
            width: '8rem',
            padding: '0.5rem',
            right: 10,
            top: 50,
        }
    },
    card2: {
        width: '15rem',
        padding: '0.2rem',
        background: '#f3f3f3',
        position: 'absolute',
        top: 10,
        [theme.breakpoints.down('xs')]: {
            width: '8rem',
            padding: '0.5rem',
            left: 10,
            right: 'auto',
            top: 50,
        }
    },
    card3: {
        width: '15rem',
        background: '#f3f3f3',
        position: 'absolute',
        left: 120,
        top: 110,
        padding: '0.2rem',
        [theme.breakpoints.down('xs')]: {
            width: '8rem',
            padding: '0.5rem',
            left: 'auto',
            top: 130
        }
    },
    card4: {
        width: '12rem',
        padding: '0.2rem 1.7rem',
        background: '#f3f3f3',
        position: 'absolute',
        top: 210,
        [theme.breakpoints.down('xs')]: {
            width: '8rem',
            padding: '0.5rem',
            right: 10,
            top: 210,
        }
    },
    card5: {
        width: '15rem',
        background: '#f3f3f3',
        position: 'absolute',
        right: 120,
        top: 310,
        padding: '0.2rem',
        [theme.breakpoints.down('xs')]: {
            width: '8rem',
            padding: '0.5rem',
            left: 10,
            right: 'auto',
            top: 210,
        }
    },
    card6: {
        width: '15rem',
        padding: '0.2rem',
        background: '#f3f3f3',
        position: 'absolute',
        left: 120,
        top: 310,
        [theme.breakpoints.down('xs')]: {
            width: '8rem',
            padding: '0.5rem',
            left: 'auto',
            top: 290
        }
    },
    typography: {
        fontSize: '1.5rem',
        color: '#cd5b45',
        fontFamily: 'Assistant ,sans-serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    },

    wrapCard: {
        height: '28rem',
        position: 'relative',
        width: '920px',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '350px',
            height: '25rem',
        }
    },
}))

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