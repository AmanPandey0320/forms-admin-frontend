import { Button, FormControl, Grid,FormControlLabel, Switch, Container } from '@material-ui/core';
import useStyles from '../../MUIStyles/fileupload';
import { BsFilePlus } from 'react-icons/bs';
import { mimeTypeIcon } from './elements.logic'
import React from 'react';

const FileUpload = (props) => {
    const {required,uiHandler,elid,index} = props;
    const classes = useStyles();
    const fileRef = React.useRef();
    const [file,setFile] = React.useState(null);
    return ( 
        <FormControl className={classes.formControl} >
            <input hidden ref={fileRef} type="file" id={`${elid}`} name="file" onChange={e => setFile(e.target.files[0])}/>
            { file &&
                <div className={classes.iconWrapper}>
                    <Grid container spacing={1}>
                        <Grid className={classes.icon} item>
                            {mimeTypeIcon(file.type,file.name)}
                        </Grid>
                        <Grid className={classes.text} item>
                            {file.name}
                        </Grid>
                    </Grid>
                </div>
            }
            <Button variant="contained" color = "primary" onClick={e => fileRef.current.click()}>
                <BsFilePlus/>&nbsp;
                {!file && <span>Select file</span>}
                {file && <span>Change file</span>}
            </Button>
            <Container>
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
            </Container>
        </FormControl>
     );
}
 
export default FileUpload;