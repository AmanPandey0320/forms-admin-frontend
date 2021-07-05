import React from 'react';
import { retrive_template } from '../../logic/form';
import { Container, Grid } from '@material-ui/core';
import useStyles from '../../assets/styles/template';
import Thumbnail from '../../components/formThumbnail/index';
import { useSelector,useDispatch } from 'react-redux'

const Templates = (props) => {
    const classes = useStyles();
    const data = useSelector(state => state.template.forms);
    const dispatch  = useDispatch();

    React.useEffect(()=>{
        let mount=true;
        // console.log(data);
        if(data.length === 0){
            // console.log('api called');
            retrive_template(props.token,(err,template) => {
                console.log(template);
                if(template !== undefined && mount === true){
                    dispatch({type:'SET_DATA',forms:template});
                }
            });
        }
        return ()=>{
            mount=false;
        }
    },[props.token,dispatch,data]);

    const {uiHandler} = props;

    return ( 
        <Container className={classes.root} disableGutters={true} >
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