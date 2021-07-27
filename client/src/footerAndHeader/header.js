import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    wrap: {
        zIndex: 3,
        marginTop: '2rem',
        padding: '2rem 5rem',
        display: 'inline-block',
        backgroundColor: '#f1f1f1',
        opacity: '0.8',
        borderRadius: '2rem',
        fontSize: '1.5rem',
        fontFamily: 'Montserrat ,sans-serif',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem',
            fontSize: '1.2rem',
        }
    },
    subHeader: {
        marginTop: '-1rem',
        marginLeft: '8rem',
        fontFamily: '"Dancing Script", cursive',
        fontWeight: 100,
        fontSize: '2rem',
        zIndex: 10, position: 'relative',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '7rem',
        }
    },
    h2: {
        margin: 0
    },
}))
const Heading = () => {

    const classes = useStyles()

    return (
        <>
            <div className={classes.wrap}>
                <h2 className={classes.h2}>DIY</h2>
                <h2 className={classes.h2}>makeup</h2>
                <h2 className={classes.h2}>workshop</h2>
            </div>
            <h2 className={classes.subHeader}><em>By Sapir Taub</em></h2>
        </>
    )
}
export default Heading;