import React, { useEffect } from 'react';
import Header from '../../Form/headder';
import { themes } from '../../assets/data/theme';
import { FormWrapper } from '../../Form/styles';
import Heading from '../../Form/heading';
import Body from '../../Form/body';
import { getOneTemplate } from '../../logic/form'
import { Backdrop,CircularProgress,Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from '../../components/Appbar/view_update';
import SettingDrawer from '../../components/Drawer/settings';
import { updateBtnClickListener } from '../../logic/update_template';
import { useSelector,useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    list: {
        width: 250,
    },
    heading:{

    },
}));

const UpdateTemplate = (props) => {

    const {token,bgcolor} = props;
    const [data,setData] = React.useState(null)
    const [,setTitle] = React.useState(null);
    const [,setDesc] = React.useState(null);
    const id = new URLSearchParams(window.location.search).get('id');
    const [backDrop,setBackBrop] = React.useState(true);
    const [snackbar,setSnackbar] = React.useState(false);
    const [drawer,setDrawer] = React.useState(false);
    const [bg,setBg] = React.useState(bgcolor);
    const [color,setColor] = React.useState('#0099e6');
    const [header , setHeader] = React.useState(null);
    const [noe,setNoe] = React.useState([]);
    const dispatch = useDispatch();
    const saved_templates = useSelector(state => state.template.saved)

    //methods
    const toggleSettingDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawer(open)
    };
    //handlers
    const uiHandler2 = ({data,type}) => {
        if(type === 'ADD_TO_FORM'){
            console.log(data)
            let temp_noe = noe;
            temp_noe.push(data.type);
            setNoe([...temp_noe]);
        }
    }



    const classes = useStyles();
    // console.log(saved_templates)
    React.useEffect(()=>{
        // console.log(data,title);
        const Saved_template = saved_templates[`${id}`];
        if(Saved_template === undefined || Saved_template ===null  ){
            console.log('api called form');
            getOneTemplate(id,token).then(res => {
                // console.log(res);
                let temp_noe = [];
                res.data.forEach(element => {
                    temp_noe.push(element.type);
                });
                setData(res);
                setNoe(temp_noe);
                setColor(res.theme.color);
                // console.log(res.theme)
                setHeader(res.theme.header != null ? res.theme.header : null);
                dispatch({type:'SAVE_FORM',id:id,form:res});
                setBackBrop(false)
            }).catch(err => {
                console.log(err);
            });
        }else{
            const res = Saved_template;
            let temp_noe = [];
            res.data.forEach(element => {
                temp_noe.push(element.type);
            });
            setData(res);
            setNoe(temp_noe);
            setColor(res.theme.color);
            setHeader(res.theme.header != null ? res.theme.header : null);
            setBackBrop(false)
        }
        
        return () => {
            document.body.style.backgroundColor = '#ffffff';
        }
    },[token,id,dispatch,saved_templates])

    useEffect(()=>{
        document.body.style.backgroundColor = bg;
    },[bg])


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

    // console.log(noe);
    // console.log(token);

    return ( 
        <>
            <Appbar updateHandler={updateBtnClickListener(header,color,bg,id,noe,token)} uiHandler={uiHandler2} toggleDrawer={toggleSettingDrawer} title = {data.title}/>
            <SettingDrawer settingDrawer={drawer} setBgcolor={setBg} setColor={setColor} setHeader={setHeader} toggleSettingDrawer={toggleSettingDrawer} classes = {classes}/>
            <FormWrapper>
                <Header bg={header != null ?themes[header].img:null} />
                <Heading color={color} title={data.title} decs={data.description} uiHandler = {{setDesc,setTitle}} />
                <Body uiHandler={uiHandler2} noe={noe} data={data.data} color={color}/>
                <div>&nbsp;</div>
            </FormWrapper>
        </>
     );
}
 
export default UpdateTemplate;