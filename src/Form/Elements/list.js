import { Checkbox, FormControl, FormControlLabel, FormGroup,Switch } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useStyles from '../../MUIStyles/datetime';
import React from 'react';

const DateTime = (props) => {
    const classes = useStyles();
    const [isDate,setIsdate] = React.useState(props.date===undefined?true:props.date);
    const [isTime,setIstime] = React.useState(props.time===undefined?true:props.time);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] = React.useState(new Date());
    const {required,index,elid} = props;
    const [req,setReq] = React.useState(required)
    return ( 
        <>
            <FormControl className={classes.formControl} >
            {/* {console.log(config)} */}
                <FormGroup className={classes.checkbox} >
                    <FormControlLabel color="primary" control={<Checkbox id={`${elid}_D`} checked={isDate} onChange={e => setIsdate(e.target.checked)} color="primary" />} label="Date" />
                    <FormControlLabel color="primary" control={<Checkbox id={`${elid}_T`} checked={isTime} onChange={e => setIstime(e.target.checked)} color="primary" />} label="Time" />
                    <FormControlLabel
                        className={classes.switch}
                        control={<Switch 
                            checked={req}
                            color='primary'
                            id={`REQ_${index}`}
                            onChange={ e => setReq(!req)}
                        />}
                        label="required"
                    />
                </FormGroup>
                
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    {
                        isDate && 
                        <KeyboardDatePicker
                            margin="normal"
                            id={`${elid}_DATE`}
                            label="Select date"
                            format="MM/dd/yyyy"
                            color="primary"
                            value={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    }
                    {
                        isTime &&
                        <KeyboardTimePicker
                            margin="normal"
                            id={`${elid}_TIME`}
                            label="Select time"
                            color="primary"
                            value={selectedTime}
                            onChange={time => setSelectedTime(time)}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    }
                </Grid>
            </MuiPickersUtilsProvider>
        </>
     );
}
 
export default DateTime;