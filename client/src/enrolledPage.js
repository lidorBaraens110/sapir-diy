import React, { useState, useEffect } from 'react';
import { Grid, Card } from '@material-ui/core';
import axios from 'axios';
import UserDetails from './component/userDetails';
import OneOnOne from './component/oneOnOne';
import Group from './component/group';
import emailjs from 'emailjs-com';
import { useStyles } from './styles';

const personalUser = {
    type: 'אחד על אחד',
    name: '',
    email: '',
    phone: '',
    phoneError: '',
    error: '',
    errorL: 0,
    price: 400,
    course: 'personal'
}
const teamUser = {
    type: 'קבוצה',
    name: '',
    email: '',
    phone: '',
    phoneError: '',
    error: '',
    errorL: 0,
    counter: 1,
    sum: '200',
    price: 200
}

const EnrolledPage = () => {
    const classes = useStyles()
    const [userDetails, setUserDetails] = useState(personalUser)
    const [userDetailsTeam, setUserDetailsTeam] = useState(teamUser)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserDetails(preValue => {
            return { ...preValue, [id]: value }
        })
    }

    const handleClickPhone = () => {
        setUserDetails(preValue => {
            return { ...preValue, error: '' }
        })
    }
    const validatePersonalPhone = () => {
        let checkValidNumber = /^\d+$/.test(userDetails.phone);
        let checkLengthNumber = userDetails.phone.length === 10
        if (!checkValidNumber && !checkLengthNumber) {
            setUserDetails(preValue => {
                return { ...preValue, error: 'מספר הטלפון לא תקין' }
            })
            return false
        }
        return true
    }

    const sendUserDetail = async (e) => {
        e.preventDefault()
        let isValidPhone = validatePersonalPhone();
        if (isValidPhone) {
            // await emailjs.send('service_mk98gpo', 'template_ue1FC2s4', userDetails, process.env.REACT_APP_EMAILJS_KEY)
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });

            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND}/sendMessage`, {
                name: userDetails.name,
                phoneNumber: userDetails.phone,
            })
            if (data.message === 'success') {
                console.log('success')
                alert(data.message)
                setUserDetails(personalUser)
            } else {
                alert(data.message)
            }
        }

    }

    const handleChangeTeam = (e) => {
        const { id, value } = e.target;
        setUserDetailsTeam(preValue => {
            return { ...preValue, [id]: value }
        })
    }

    const handleClickPhoneGroup = () => {
        setUserDetailsTeam(preValue => {
            return { ...preValue, error: '' }
        })
    }
    const handleChangeCurrentParticipant = (e) => {
        const { value } = e.target;
        setUserDetailsTeam(preValue => {
            return { ...preValue, counter: value, sum: value * userDetailsTeam.price }
        })
    }


    const validateGroupPhone = () => {
        let checkValidNumber = /^\d+$/.test(userDetailsTeam.phone)
        let checkLengthNumber = userDetailsTeam.phone.length === 10
        if (!checkValidNumber || !checkLengthNumber) {
            setUserDetailsTeam(preValue => {
                return { ...preValue, error: 'מספר הטלפון לא תקין' }
            })
            return false
        }
        return true
    }

    const sendUserDetailTeam = async (e) => {
        e.preventDefault()
        let isValidPhone = validateGroupPhone();
        if (isValidPhone) {
            // await emailjs.send('service_mk98gpo', 'template_ue1FC2s4', userDetailsTeam, process.env.REACT_APP_EMAILJS_KEY)
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });

            const { data } = await axios.post('http://localhost:5000/sendMessage', {
                name: userDetailsTeam.name,
                phoneNumber: userDetailsTeam.phone,
                amount: userDetailsTeam.counter
            })
            if (data.message === 'success') {
                console.log('success')
                alert(data.message)
                setUserDetailsTeam(teamUser)
            } else {
                alert(data.message)
            }
        }
    }

    const { email, name, phone, error } = userDetails

    return (
        <div >
            <Grid container className={classes.gridContainer} >
                {/* 1x1 */}
                <Grid
                    item
                    xs={12} sm={12} md={6} lg={6} xl={6}
                >
                    <Card className={classes.enrollCard}>
                        <OneOnOne />
                        <UserDetails
                            handleClickPhone={handleClickPhone}
                            sendUserDetail={sendUserDetail}

                            error={error}
                            handleChange={handleChange}
                            name={name}
                            email={email}
                            phone={phone}
                            price={userDetails.price} />
                    </Card>
                </Grid>
                {/* team */}
                <Grid
                    item
                    xs={12} sm={12} md={6} lg={6} xl={6}
                >
                    <div className={classes.enrollCard}>
                        <Group />
                        <UserDetails
                            handleClickPhone={handleClickPhoneGroup}
                            sendUserDetail={sendUserDetailTeam}
                            error={userDetailsTeam.error}
                            price={userDetailsTeam.price}
                            sum={userDetailsTeam.sum}
                            participants
                            handleChangeCurrentParticipant={handleChangeCurrentParticipant}
                            currentParticipants={userDetailsTeam.currentParticipants}
                            counter={userDetailsTeam.counter}
                            handleChange={handleChangeTeam}
                            name={userDetailsTeam.name}
                            email={userDetailsTeam.email}
                            phone={userDetailsTeam.phone} />
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}

export default EnrolledPage;