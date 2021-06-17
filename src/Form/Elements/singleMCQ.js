import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Switch, IconButton  } from '@material-ui/core';
import React from 'react';
import useStyles from '../../MUIStyles/singleMCQ';
import { MdAddBox,MdCancel } from 'react-icons/md';

const SingleMCQ = (props) => {
    const {required,elid:key,index} = props;
    const [options,setOptions] = React.useState(props.options?props.options:[]);
    const [value,setValue] = React.useState(`op_no_1_for_${key}`);
    const [req,setReq] = React.useState(required);
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
            {console.log(options)}
            <RadioGroup color="primary" value={value} onChange={e=> setValue(e.target.value)} aria-label="options" name={`${key}`} >
                {
                    options.map( (option,index) => <FormControlLabel 
                                                        key={`op_no_${index+1}${option.id}_for_${key}`} 
                                                        control={<Radio 
                                                                    value={`op_no_${index+1}_for_${key}`} 
                                                                    color="primary"
                                                                />} 
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
                    control={<Radio disabled color="primary"/>} 
                    label={<span><TextField 
                                    defaultValue="Add option" 
                                    disabled 
                                    color="primary"/>
                                <IconButton 
                                    onClick={onOptionChangeListener(options.length) } 
                                    color="primary">
                                    <MdAddBox/>
                                </IconButton>
                            </span>}/>
            </RadioGroup>
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
 
export default SingleMCQ;