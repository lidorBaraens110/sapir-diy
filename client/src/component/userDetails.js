import React from 'react';
import { Button, TextField, List, ListItem, Typography } from '@material-ui/core';
import ParticipantsSelect from './participantsSelect';
import { useStyles } from '../styles';


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