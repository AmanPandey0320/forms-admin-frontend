import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Switch, IconButton  } from '@material-ui/core';
import React from 'react';
import useStyles from '../../MUIStyles/singleMCQ';
import { MdAddBox } from 'react-icons/md';

const SingleMCQ = (props) => {
    const {required,uiHandler,key} = props;
    const [options,setOptions] = React.useState([{id:1,text:'Option 1'}])
    const classes = useStyles();
    return ( 
        <FormControl component="fieldset" className={classes.formControl} >
            <FormLabel component="legend" >Options</FormLabel>
            <RadioGroup color="primary" aria-label="options" name={`op_for_${key}`} >
                {
                    options.map( option => <FormControlLabel key={`op_no_${option.id}_for_${key}`} control={<Radio color="primary"/>} label={<TextField defaultValue={option.text} color="primary"/>}/>)
                }
                <FormControlLabel control={<Radio disabled color="primary"/>} label={<span><TextField defaultValue="Add option" disabled color="primary"/><IconButton color="primary"><MdAddBox color="primary"/></IconButton></span>}/>
            </RadioGroup>
            <FormControlLabel
                className={classes.switch}
                control={<Switch 
                    checked={required}
                    color='primary'
                    onChange={ e => uiHandler({type:'REQ',data:!required})}
                 />}
                 label="required"
             />
        </FormControl>
     );
}
 
export default SingleMCQ;