import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logs from './section/logs';
import NewTemplate from './section/newTemplate';
import Template from './section/template';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import SettingDrawer from '../components/Drawer/settings';
import MainDrawer from '../components/Drawer/main';
import Styles from '../assets/styles/home';
import MainAppbar from '../components/Appbar/main';
import { submit_template } from '../logic/form';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackBar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import UpdateTemplate from './section/view_update';
import { formCreator } from '../logic/home';

const useStyles = makeStyles(Styles);

const Home = (props) => {
    const classes = useStyles();
    const params = useParams();
    const history = useHistory();
    const [drawer,setDrawer] = React.useState(false);
    const [settingDrawer,setSettingDrawer] = React.useState(false);
    const [header , setHeader] = React.useState(null);
    const [bgcolor,setBgcolor] = React.useState('#e6f7ff');
    const [color,setColor] = React.useState('#0099e6');
    const [backDrop,setBackDrop] = React.useState(false);
    const [snackbar,setSnackbar] = React.useState(false);
    const [view,setView] = React.useState([]);
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
    const [noe,setNoe]=React.useState(['ST']);
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
                let new_noe=noe;
                new_form_data[index] = data;
                new_noe[index]=data.type;
                setNoe([...new_noe]);
                setForm_data([...new_form_data])
            }else{
                setNoe([...noe,data.type]);
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
                data:formCreator(noe),
                enabled:true
            }
            console.log(data);
            submit_template(data,setBackDrop,setError,history,setForm_data);
            setColor('#0099e6');
            setBgcolor('#e6f7ff');
        }else if(type === 'UPDATE_TEMPLATE_DATA'){
            alert('updating template');
        }else if(type === 'UPDATE_TEMPLATE'){

        }else if(type === 'VIEW_TEMPLATE'){
            setView(data);
            history.push(`/home/view-template?id=${data.template_id}`)
        }else if(type === 'APPEND_ELEMENT'){
            setNoe([...noe,data]);
        }else if(type === 'TEST'){
            formCreator(noe);
        }
    }
    useEffect(()=>{
        if(params.type === 'new-template'|| params.type === 'template'){
            setForm_data([{
                type:'ST',
                question:null,
                required:false
            }]);
            setNoe(['ST']);
        }
    },[params])
    return (
        <div>
            <MainAppbar classes={classes} index = {form_data.length} uiHandler={uiHandler} toggleDrawer={toggleDrawer} toggleSettingDrawer={toggleSettingDrawer} component={params.type}/>
            <MainDrawer classes = {classes} drawer={drawer} toggleDrawer={toggleDrawer} toggleSettingDrawer={toggleSettingDrawer} setNoe={setNoe} component={params.type}/>

            <SettingDrawer settingDrawer={settingDrawer} setBgcolor={setBgcolor} setColor={setColor} setHeader={setHeader} toggleSettingDrawer={toggleSettingDrawer} classes = {classes}/>
            { params.type === 'template' && !backDrop && <Template uiHandler={uiHandler} token = {props.token}/>}
            { params.type === 'new-template' && !backDrop && <NewTemplate uiHandler={uiHandler} noe={noe} data={form_data} color={color} bgcolor = {bgcolor} header={header}/>}
            { params.type === 'logs' && !backDrop && <Logs token = {props.token}/>}
            { params.type === 'view-template' && !backDrop && <UpdateTemplate token = {props.token} bgcolor={view.theme.bgColor} uiHandler={uiHandler} />}

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
        token:state.user.token,
    }
}
export default connect(mapStatetoProps)(HomeWrapper);