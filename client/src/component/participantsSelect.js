import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const CountOfItem = ({ value, onChange, count, name }) => {

    const handleCounter = (count) => {
        let allOption = [];
        for (let i = 1; i <= count; i++) {
            allOption.push(i)
        }
        return allOption.map((item, i) => {
            return <MenuItem key={i} value={item}>{item}</MenuItem>
        })
    }
    return (
        <FormControl style={{
            textAlign: 'center',
            minWidth: 120,
        }} >
            <InputLabel id="demo-simple-select-label" htmlFor='age-native-simple' style={{ fontFamily: 'Assistant , sans-serif' }}>משתתפות</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                inputProps={{
                    id: 'age-native-simple'
                }}
                id="demo-simple-select"
                name={name}
                value={value}
                onChange={onChange}
            >
                {handleCounter(count)}
            </Select>

        </FormControl >
    )
}

export default CountOfItem;