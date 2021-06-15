import { FormControl, FormControlLabel, FormLabel, Checkbox, FormGroup, TextField, Switch, IconButton  } from '@material-ui/core';
import React from 'react';
import useStyles from '../../MUIStyles/singleMCQ';
import { MdAddBox,MdCancel } from 'react-icons/md';
import { editOption,removeOption,appendOption } from './elements.logic'

const MultipleMCQ = (props) => {
    const {required,uiHandler,elid:key,index} = props;
    const [options,setOptions] = React.useState([]);
    const [curr_op,setCurr_op] = React.useState('New option');
    const [value,setValue] = React.useState(`op_no_1_for_${key}`);
    const classes = useStyles();
    const this_uiHandler = ({type,data}) => {
        switch (type) {
            case 'EDIT_OPTION':{
                setOptions(data);
                setCurr_op(data[data.length -1].text)
                uiHandler({type:'SET_OPTION',data})
                break;
            }
            case 'REMV_OPTION':{
                setOptions(data);
                if(data.length > 0){
                    setCurr_op(data[data.length -1].text)
                    uiHandler({type:'SET_OPTION',data})
                }
                break;
            }
            case 'APND_OPTION':{
                setOptions(data);
                uiHandler({type:'SET_OPTION',data})
                // setCurr_op('New option')
                break; 
            }
            default :{
                alert('unknown form operation');
                break;
            }
        }
    }
    return ( 
        <FormControl component="fieldset" className={classes.formControl} >
            <FormLabel component="legend" >Options</FormLabel>
            <FormGroup color="primary" value={value} onChange={e=> setValue(e.target.value)} aria-label="options" >
                {
                    options.map( (option,index) => <FormControlLabel key={`op_no_${index+1}${option.id}_for_${key}`} control={<Checkbox name={key} value={`op_no_${index+1}_for_${key}`} color="primary"/>} label={<span><TextField id={`${key}_OP_${index}`} helperText={index+1 === options.length && <small>press <em>enter</em> to save option</small>} onChange={e => setCurr_op(e.target.value)} defaultValue={option.text} onKeyDown={editOption(index,options,this_uiHandler,curr_op)} placeholder="New option" color="primary"/><IconButton onClick={removeOption(index,options,this_uiHandler)} color="primary"><MdCancel/></IconButton></span>}/>)
                }
                <FormControlLabel control={<Checkbox disabled color="primary"/>} label={<span><TextField defaultValue="Add option" disabled color="primary"/><IconButton onClick={ appendOption(options,this_uiHandler,curr_op) } color="primary"><MdAddBox/></IconButton></span>}/>
            </FormGroup>
            <FormControlLabel
                className={classes.switch}
                control={<Switch 
                    checked={required}
                    color='primary'
                    id={`REQ_${index}`}
                    onChange={ e => uiHandler({type:'REQ',data:!required})}
                 />}
                 label="required"
             />
        </FormControl>
     );
}
 
export default MultipleMCQ;