import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Switch, IconButton  } from '@material-ui/core';
import React from 'react';
import useStyles from '../../MUIStyles/singleMCQ';
import { MdAddBox,MdCancel } from 'react-icons/md';
import { editOption,removeOption,appendOption } from './elements.logic'

const SingleMCQ = (props) => {
    const {required,uiHandler,id:key} = props;
    const [options,setOptions] = React.useState([{id:1,text:'New option'}]);
    const [curr_op,setCurr_op] = React.useState('New option');
    const classes = useStyles();
    const this_uiHandler = ({type,data}) => {
        switch (type) {
            case 'EDIT_OPTION':{
                setOptions(data);
                setCurr_op(data[data.length -1].text)
                break;
            }
            case 'REMV_OPTION':{
                setOptions(data);
                if(data.length > 0){
                    setCurr_op(data[data.length -1].text)
                }
                break;
            }
            case 'APND_OPTION':{
                setOptions(data);
                // setCurr_op('New option')
                break; 
            }
        }
    }
    console.log(key);
    return ( 
        <FormControl component="fieldset" className={classes.formControl} >
            <FormLabel component="legend" >Options</FormLabel>
            {console.log(options)}
            <RadioGroup color="primary" value={`op_no_1_for_${key}`} aria-label="options" name={`op_for_${key}`} >
                {
                    options.map( (option,index) => <FormControlLabel key={`op_no_${index+1}${option.id}_for_${key}`} control={<Radio value={`op_no_${index+1}_for_${key}`} color="primary"/>} label={<span><TextField helperText={index+1 === options.length && <small>press <em>enter</em> to save option</small>} onChange={e => setCurr_op(e.target.value)} defaultValue={option.text} onKeyDown={editOption(index,options,this_uiHandler,curr_op)} placeholder="New option" color="primary"/><IconButton onClick={removeOption(index,options,this_uiHandler)} color="primary"><MdCancel/></IconButton></span>}/>)
                }
                <FormControlLabel control={<Radio disabled color="primary"/>} label={<span><TextField defaultValue="Add option" disabled color="primary"/><IconButton onClick={ appendOption(options,this_uiHandler,curr_op) } color="primary"><MdAddBox/></IconButton></span>}/>
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