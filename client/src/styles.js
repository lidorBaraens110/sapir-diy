import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative'
    },
    backgroundImage: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
        backgroundAttachment: 'fixed',
        paddingBottom: '10rem',
        backgroundPosition: '50%',
        padding: 0,
        opacity: 0.7,
        width: '100%',
        textAlign: 'center',
        backgroundImage: 'url("https://www.vamosrayos.com/b/2020/01/pink-backgrounds-png-css-patterns-images-vector-908x1362.jpg")',
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: '100%',
            opacity: 0.35,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100vw',
        }
    },
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
    wrapCardParent: {
        display: 'flex',
        justifyContent: 'center'
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
    wrapContent: {
        position: 'relative',
        marginBottom: '2rem',
        padding: '0 25%',
        [theme.breakpoints.down('xs')]: {
            padding: '0 5%',
        }
    },
    content: {
        zIndex: 5,
        color: '#421F00',
        lineHeight: '2rem',
        fontWeight: '600',
        fontSize: '1.3rem',
        textAlign: 'center',
        fontFamily: 'Assistant , sans-serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        }
    },
    strongTyp: {
        color: 'black',
        padding: '3rem 25%',
        textAlign: 'center',
        fontSize: '1.1rem',
        fontWeight: 'bolder',
        fontFamily: 'Assistant , sans-serif'
    },
    //enroll page

    gridContainer: {
        margin: 0,
        maxWidth: '100%',
        position: 'relative'
    },
    enrollCard: {
        margin: '2rem',
        backgroundColor: 'white',
        borderRadius: '2rem',
        [theme.breakpoints.down('xs')]: {
            margin: '0.5rem'
        }
    },
    list: {
        textAlign: 'center', padding: '1rem 15%',
        [theme.breakpoints.down('xs')]: {
            padding: '0.5rem 1rem'
        }
    },
    listItem: {
        display: 'flex',
        justifyContent: 'center',
        color: '#421F00'
    },
    price: {
        fontSize: '1.2rem',
        fontFamily: 'Assistant , sans-serif',
        backgroundColor: '#ffe1e6',
        padding: '1rem',
        fontWeight: 'bold',
        borderRadius: '1rem'
    },
    participants: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    total: {
        fontFamily: 'Assistant , sans-serif',
        alignSelf: 'flex-end'
    },
    error: {
        color: 'red'
    },
    submit: {
        margin: '2rem',
        backgroundColor: 'black',
        color: 'white',
        // borderRadius: '0',
        border: 'solid #ffecda 2px',
        [theme.breakpoints.up('sm')]: {
            '&:hover': {
                borderColor: 'black',
                backgroundColor: 'white',
                color: 'black'
            }
        }
    },
    submitTyp: {
        fontFamily: 'Assistant , sans-serif'
    },
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

}));