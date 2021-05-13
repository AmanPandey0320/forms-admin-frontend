import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { InputTypes } from '../../assets/data/form'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '22%',
      [theme.breakpoints.down('xs')]:{
          minWidth:'90%'
      }
    },
    textfield: {
        margin: theme.spacing(1),
        minWidth: '72%',
        [theme.breakpoints.down('xs')]:{
            minWidth:'90%'
        }
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const Question = (props) => {
    const { id : key,uiHandler,type:value } = props;
    const classes = useStyles();
    // console.log(props);
    return ( 
        <div>
            <FormControl className={classes.textfield}>
                <TextField
                    id={`${key}`}
                    label='Question'
                    color='primary'
                    onChange={e => uiHandler({type:'QUE',data:e.target.value})}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id={`select_for_question_${key}`}>Question Type</InputLabel>
                <Select
                    id={`select${key}`}
                    onChange={e => uiHandler({data:e.target.value,type:'IN'})}
                    value={value}
                    labelId={`select_for_question_${key}`}>
                    {
                        InputTypes.map( item => <MenuItem key={`${key}of${item.id}`} value={item.value} >{item.text}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
     );
}
 
export default Question;