import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../../MUIStyles/smallText';
import { FormControlLabel, Switch } from '@material-ui/core';

 const SmallText = (props) => {
     const classes = useStyles();
     const {required,uiHandler,elid,index} = props;
     return ( 
         <FormControl className={classes.formControl}>
             
             <TextField
                id={elid}
                className={classes.textField}
                placeholder="Your answer here"
             />
             <FormControlLabel
                className={classes.switch}
                control={<Switch 
                    checked={required}
                    id={`REQ_${index}`}
                    color='primary'
                    onChange={ e => uiHandler({type:'REQ',data:!required})}
                 />}
                 label="required"
             />

         </FormControl>
      );
 }
  
 export default SmallText;