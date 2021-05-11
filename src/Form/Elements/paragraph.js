import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../../MUIStyles/paragraph';
import { FormControlLabel, Switch } from '@material-ui/core';

 const ParaGraph = (props) => {
     const classes = useStyles();
     const {required,uiHandler} = props;
     return ( 
         <FormControl className={classes.formControl}>
             
             <TextField
                className={classes.textField}
                label="Your answer here"
                multiline
                variant="outlined"
                rows={3}
             />
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
  
 export default ParaGraph;