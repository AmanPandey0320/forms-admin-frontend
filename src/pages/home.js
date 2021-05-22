import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logs from './section/logs';
import NewTemplate from './section/newTemplate';
import Template from './section/template';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SettingDrawer from '../components/Drawer/settings';
import MainDrawer from '../components/Drawer/main';
import Styles from '../assets/styles/home';
import MainAppbar from '../components/Appbar/main';
import { submit_template } from '../logic/form';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackBar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(Styles);

const Home = (props) => {
    const classes = useStyles();
    const [drawer,setDrawer] = React.useState(false);
    const [settingDrawer,setSettingDrawer] = React.useState(false);
    const [component,setComponent] = React.useState('tempalte');
    const [header , setHeader] = React.useState(null);
    const [bgcolor,setBgcolor] = React.useState('#e6f7ff');
    const [color,setColor] = React.useState('#0099e6');
    const [backDrop,setBackDrop] = React.useState(false);
    const [snackbar,setSnackbar] = React.useState(false);
    const [error,setError] = React.useState({
        open:false,
        text:'Some Error',
        type:'success'
    });

    const [form_data,setForm_data] = React.useState([{
        type:'ST',
        question:null,
        required:false
    }]);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawer(open)
    };
    const toggleSettingDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setSettingDrawer(open)
    };

    const uiHandler = ({type,data,index}) => {

        // console.log(type,data,index);//logs to be removed in deployment

        if(type === 'ADD_TO_FORM'){
            if(index < form_data.length){
                let new_form_data = form_data;
                new_form_data[index] = data;
                setForm_data([...new_form_data])
            }else{
                setForm_data([...form_data,data]);
            }
        }else if(type === 'CREATE_TEMPLATE'){
            //submit template to api
            const data = {
                auth_token:props.token,
                title:document.getElementById('form_title_txt').value,
                description:document.getElementById('form_description_txt').value,
                theme:{
                    bgColor:bgcolor,
                    color:color,
                    header:header
                },
                data:form_data,
                enabled:true
            }
            submit_template(data,setBackDrop,setError);
        }
    }
    return ( 
        <div>
            <MainAppbar classes={classes} index = {form_data.length} uiHandler={uiHandler} toggleDrawer={toggleDrawer} toggleSettingDrawer={toggleSettingDrawer} component={component}/>
            <MainDrawer classes = {classes} drawer={drawer} toggleDrawer={toggleDrawer} toggleSettingDrawer={toggleSettingDrawer}setComponent={setComponent} component={component}/>

            <SettingDrawer settingDrawer={settingDrawer} setBgcolor={setBgcolor} setColor={setColor} setHeader={setHeader} toggleSettingDrawer={toggleSettingDrawer} classes = {classes}/>
            { component === 'tempalte' && !backDrop && <Template/>}
            { component === 'new' && !backDrop && <NewTemplate uiHandler={uiHandler} data={form_data} color={color} bgcolor = {bgcolor} header={header}/>}
            { component === 'log' && !backDrop && <Logs token = {props.token}/>}

            <Backdrop onClick={()=>{setSnackbar(true)}} className={classes.backdrop} open={backDrop} >
                <CircularProgress color="primary" />
                    <SnackBar open={snackbar} autoHideDuration={3000} onClose={()=>{setSnackbar(false)}}>
                        <Alert onClose={()=>{setSnackbar(false)}} severity="info">
                            Please wait while we submit template!
                        </Alert>
                    </SnackBar>
            </Backdrop>
            <SnackBar open={error.open} autoHideDuration={5000} onClose={()=>{setError(false)}}>
                <Alert onClose={()=>{setError(false)}} severity={error.type}>
                    {error.text}
                </Alert>
            </SnackBar>

        </div>
     );
}
const HomeWrapper = (props) => {
    // console.log(props);
    const history = useHistory();
    if(props.token){
        return(
            <Home history={history} {...props}/>
        )
    }else{
        history.push('/');
        return(
            <>
            </>
        );
    }
}
const mapStatetoProps = (state) => {
    return{
        token:state.user.token
    }
}
export default connect(mapStatetoProps)(HomeWrapper);