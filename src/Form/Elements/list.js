import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
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
    const [config,setConfig] = React.useState({one:true,two:true});
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] = React.useState(new Date());
    return ( 
        <>
            <FormControl className={classes.formControl} >
            {/* {console.log(config)} */}
                <FormGroup className={classes.checkbox} >
                    <FormControlLabel color="primary" control={<Checkbox checked={config.one} onChange={e => setConfig({...config,one:e.target.checked})} color="primary" />} label="Date" />
                    <FormControlLabel color="primary" control={<Checkbox checked={config.two} onChange={e => setConfig({...config,two:e.target.checked})} color="primary" />} label="Time" />
                </FormGroup>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    {
                        config.one && 
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
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
                        config.two &&
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
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