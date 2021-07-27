import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
}))

function Content() {

    const classes = useStyles();


    return (
        <div className={classes.wrapContent} >
            <Typography className={classes.content} >
                אלו רק חלק קטן מהשאלות שאני נשאלת לגבי איפור יום יומי נכון.
                <br />
                לכן החלטתי לפתוח את סדנאות ה-DIY-
                (עשי זאת בעצמך)  כדי לתת לכן את כל המידע הנדרש שחווית האיפור בכל יום תהפוך להיות מהנה וקלה יותר.
                <br /> חשוב לי להעביר לכן את המידע המדויק והרלוונטי תוך כדי למידה על סוג וגוון העור.
                <br />
                הסדנאות מתחלקות לשני חלקים:
                <br />
                <strong  >החלק הראשון- </strong>
                כולל בתוכו הסבר הדגמה והמלצה על המוצרים
                .<br />
                <strong  >החלק השני- </strong>
                הוא החלק המעשי בו תוכלו ליישם על עצמכן בליווי שלי.<br />

                לסדנא תגיעו עם תיק האיפור האישי שלכן כדי שתוכלו לדעת איך להתאפר נכון בעזרת המוצרים האישיים שכבר ברשותכן.
            </Typography>
            <Typography className={classes.strongTyp}>*במקום יהיה ניתן לרכוש מייק אפ בהתאמה אישית לפי סוג וגוון עור</Typography>
        </div>
    );
}

export default Content;