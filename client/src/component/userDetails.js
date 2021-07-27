import React from 'react';
import { Button, TextField, makeStyles, List, ListItem, Typography } from '@material-ui/core';
import ParticipantsSelect from './participantsSelect';

const useStyles = makeStyles(theme => ({
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
        border: 'solid #ffecda 2px',
        // [theme.breakpoints.up('sm')]: {
        //     '&:hover': {
        //         borderColor: 'black',
        //         backgroundColor: 'white',
        //         color: 'black'
        //     }
        // }
    },
    submitTyp: {
        fontFamily: 'Assistant , sans-serif'
    },

}))


const UserDetails = ({ counter, sum, price, handleChangeCurrentParticipant
    , participants, name, email, phone, handleChange, sendUserDetail, error, handleClickPhone }) => {
    const classes = useStyles()
    return (
        <form onSubmit={sendUserDetail}>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <Typography className={classes.price}>
                        {price} ש"ח
                    </Typography>
                </ListItem>
                <ListItem >
                    <TextField
                        required
                        fullWidth
                        onChange={handleChange}
                        id="name"
                        value={name}
                        placeholder='שם מלא'
                        variant='outlined'
                        size='small' />
                </ListItem>
                <ListItem>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        type='email'
                        onChange={handleChange}
                        placeholder='אמייל'
                        variant='outlined'
                        value={email}
                        size='small' />
                </ListItem>
                <ListItem >
                    <TextField
                        onClick={handleClickPhone}
                        required
                        fullWidth
                        id="phone"
                        value={phone} placeholder='טלפון'
                        onChange={handleChange}
                        variant='outlined'
                        size='small' />
                </ListItem>
                {participants && <ListItem className={classes.participants} >
                    <ParticipantsSelect
                        name={'participant'}
                        value={counter}
                        count={4}
                        onChange={handleChangeCurrentParticipant}
                    />
                    <Typography className={classes.total}>סה"כ: {sum}</Typography>
                </ListItem>
                }
                {error && <div >
                    <Typography className={classes.error}>
                        {error}
                    </Typography>
                </div>
                }
                <Button type='submit'
                    className={classes.submit}>
                    <Typography className={classes.submitTyp}>שליחה</Typography>
                </Button>
            </List>
        </form>
    )
}

export default UserDetails