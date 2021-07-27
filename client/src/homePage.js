import React from 'react';
import { useSpring, animated } from 'react-spring'
import Heading from './footerAndHeader/header';
import Footer from './footerAndHeader/footer';
import Cards from './component/cards';
import Content from './component/content';
import EnrolledPage from './enrolledPage';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        textAlign: 'center',
        position: 'relative'
    },
    backgroundImage: {
        backgroundImage: 'url("https://www.vamosrayos.com/b/2020/01/pink-backgrounds-png-css-patterns-images-vector-908x1362.jpg")',
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
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: '100%',
            opacity: 0.35,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100vw',
        }
    },
    wrapCardParent: {
        display: 'flex',
        justifyContent: 'center'
    },
}))
const HomePage = () => {
    const classes = useStyles()

    const props = useSpring({
        config: { duration: 1500 },
        opacity: 1,
        from: { opacity: 0 },
        textAlign: 'center',
        padding: '0',
        width: '100%'
    })

    return (
        <animated.div style={props} >
            <div className={classes.container}>
                <div className={classes.backgroundImage} />
                <Heading />
                <div className={classes.wrapCardParent} >
                    <Cards />
                </div>
                <Content />
                <EnrolledPage />
                <Footer />

            </div>
        </animated.div>
    )
}
export default HomePage;