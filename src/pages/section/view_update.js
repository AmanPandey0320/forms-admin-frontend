import React from 'react';
import Header from '../../Form/headder';
import { themes } from '../../assets/data/theme';
import { FormWrapper } from '../../Form/styles';
import Heading from '../../Form/heading';
import Body from '../../Form/body';
import { getOneTemplate } from '../../logic/form'
import { Backdrop,CircularProgress,Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    }
}));

const UpdateTemplate = (props) => {

    const {uiHandler,token,bgcolor} = props;
    const [data,setData] = React.useState(null)
    // let { color, bgColor:bgcolor,header }=
    const [title,setTitle] = React.useState(null);
    const [decs,setDesc] = React.useState(null);
    const queryParams = new URLSearchParams(window.location.search);
    const [backDrop,setBackBrop] = React.useState(true);
    const [snackbar,setSnackbar] = React.useState(false);

    const classes = useStyles();

    React.useEffect(()=>{
        // console.log(data,title);
        document.body.style.backgroundColor = bgcolor;
        getOneTemplate(queryParams.get('id'),token).then(res => {
            console.log(res);
            setData(res);
            setBackBrop(false)
        }).catch(err => {
            console.log(err);
        });
        return () => {
            document.body.style.backgroundColor = '#ffffff';
        }
    },[])

    if(data === null ){
        return(
            <Backdrop onClick={()=>{setSnackbar(true)}} className={classes.backdrop} open={backDrop} >
                <CircularProgress color="primary" />
                    <Snackbar open={snackbar} autoHideDuration={3000} onClose={()=>{setSnackbar(false)}}>
                        <Alert onClose={()=>{setSnackbar(false)}} severity="info">
                            Please wait...
                        </Alert>
                    </Snackbar>
            </Backdrop>
        )
    }

    return ( 
        <FormWrapper>
                <Header bg={data.theme.header != null ? themes[data.theme.header].img : null} />
                <Heading color={data.theme.color} title={data.title} decs={data.description} uiHandler = {{setDesc,setTitle}} />
                <Body uiHandler={uiHandler} data={data.data} color={data.theme.color}/>
        </FormWrapper>
     );
}
 
export default UpdateTemplate;