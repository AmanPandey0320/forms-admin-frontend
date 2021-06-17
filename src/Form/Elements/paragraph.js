import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../../MUIStyles/paragraph';
import { FormControlLabel, Switch } from '@material-ui/core';

 const ParaGraph = (props) => {
     const classes = useStyles();
     const {required,elid,index} = props;
     const [req,setReq]=React.useState(required);
     return ( 
         <FormControl className={classes.formControl}>
             
             <TextField
                className={classes.textField}
                label="Your answer here"
                multiline
                id={elid}
                variant="outlined"
                rows={3}
             />
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
  
 export default ParaGraph;