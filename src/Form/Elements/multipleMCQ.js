import { FormControl, FormControlLabel, FormLabel, Checkbox, FormGroup, TextField, Switch, IconButton  } from '@material-ui/core';
import React from 'react';
import useStyles from '../../MUIStyles/singleMCQ';
import { MdAddBox,MdCancel } from 'react-icons/md';

const MultipleMCQ = (props) => {
    const {required,elid:key,index} = props;
    const [options,setOptions] = React.useState(props.options?props.options:[]);
    const [req,setReq]=React.useState(required);
    const classes = useStyles();
    const onOptionChangeListener = (index,edit) => (event) =>{
        const len = options.length;
        if(index<len){
            if(edit){
                //edit option
                let newOption = options;
                newOption[index] = event.target.value;
                setOptions(newOption);
            }else{
                //delete an option
                let newOption = []
                options.forEach((option,idx) => {
                    if(idx !== index){
                        newOption.push(option)
                    }
                });
                setOptions(newOption);
            }
        }else{
            //adding new option
            setOptions([...options,'New option']);
        }
    }
    return ( 
        <FormControl component="fieldset" className={classes.formControl} >
            <FormLabel component="legend" >Options</FormLabel>
            <FormGroup color="primary" aria-label="options" >
                {
                    options.map( (option,index) => <FormControlLabel 
                                                        key={`op_no_${index+1}${option.id}_for_${key}`} 
                                                        control={<Checkbox 
                                                                    name={key} 
                                                                    value={`op_no_${index+1}_for_${key}`} 
                                                                    color="primary"/>} 
                                                                    label={<span><TextField 
                                                                        id={`${key}_OP_${index}`} 
                                                                        key={option}
                                                                        helperText={index+1 === options.length && <small>press <em>enter</em> to save option</small>} 
                                                                        defaultValue={option}
                                                                        onChange={onOptionChangeListener(index,true)}
                                                                        placeholder="New option" 
                                                                        color="primary"
                                                                    />
                                                                            <IconButton 
                                                                                onClick={onOptionChangeListener(index)}  
                                                                                color="primary">
                                                                                    <MdCancel/>
                                                                            </IconButton>
                                                                        </span>}
                                                    />)
                }
                <FormControlLabel 
                    control={<Checkbox name={key} disabled color="primary"/>} 
                    label={<span>
                            <TextField defaultValue="Add option" disabled color="primary"/>
                            <IconButton 
                                onClick={onOptionChangeListener(options.length) } 
                                color="primary">
                                    <MdAddBox/>
                            </IconButton>
                        </span>}
                />
            </FormGroup>
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
        </FormControl>
     );
}
 
export default MultipleMCQ;