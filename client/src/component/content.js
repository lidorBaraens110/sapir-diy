import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles';

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