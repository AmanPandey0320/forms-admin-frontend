import React from 'react';
import { retrive_template } from '../../logic/form';
import { Container, Grid } from '@material-ui/core';
import useStyles from '../../assets/styles/template';
import Thumbnail from '../../components/formThumbnail/index';

const Templates = (props) => {
    const classes = useStyles();
    const [data,setData] = React.useState([])

    React.useEffect(()=>{
        retrive_template(props.token,(err,template) => {
            console.log(template);
            if(template !== undefined)
            setData(template);
        });
    },[props.token]);

    const {uiHandler} = props;

    return ( 
        <Container className={classes.root} disableGutters={true} >
            {console.log(data)}
            <Grid spacing={5} container>
                {
                    data.map(element => {
                        return(
                            <Grid onClick={()=>{uiHandler({type:'VIEW_TEMPLATE',data:element})}} key={element.template_id} item>
                                <Thumbnail element={element} bg={element.theme.bgColor}/>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Container>
    );
}
 
export default Templates;