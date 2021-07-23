import React from 'react';
import { useHistory } from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import Heading from './footerAndHeader/header';
import Footer from './footerAndHeader/footer';
import { useStyles } from './styles';
import Cards from './component/cards';
import Content from './component/content';
import EnrolledPage from './enrolledPage';

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