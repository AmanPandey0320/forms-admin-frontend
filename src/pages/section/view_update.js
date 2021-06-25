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
import Appbar from '../../components/Appbar/view_update';
import SettingDrawer from '../../components/Drawer/settings';
import { updateBtnClickListener } from '../../logic/update_template';

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

    //methods
    const toggleSettingDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawer(open)
    };
    //handlers
    const uiHandler2 = ({data,type,index}) => {
        if(type === 'ADD_TO_FORM'){
            console.log(data,index)
            let temp_noe = noe;
            temp_noe[index] = data.type;
            setNoe([...temp_noe]);
        }
    }



    const classes = useStyles();

    React.useEffect(()=>{
        // console.log(data,title);
        document.body.style.backgroundColor = bg;
        getOneTemplate(id,token).then(res => {
            // console.log(res);
            let temp_noe = [];
            res.data.forEach(element => {
                temp_noe.push(element.type);
            });
            setData(res);
            setNoe(temp_noe);
            setColor(res.theme.color);
            console.log(res.theme)
            setHeader(res.theme.header != null ? res.theme.header : null);
            setBackBrop(false)
        }).catch(err => {
            console.log(err);
        });
        return () => {
            document.body.style.backgroundColor = '#ffffff';
        }
    },[bg,token,id])


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
    // console.log(updateBtnClickListener(header,color,bg,id))

    return ( 
        <>
            <Appbar updateHandler={updateBtnClickListener(header,color,bg,id,noe)} toggleDrawer={toggleSettingDrawer} title = {data.title}/>
            <SettingDrawer settingDrawer={drawer} setBgcolor={setBg} setColor={setColor} setHeader={setHeader} toggleSettingDrawer={toggleSettingDrawer} classes = {classes}/>
            <FormWrapper>
                <Header bg={header != null ?themes[header].img:null} />
                <Heading color={color} title={data.title} decs={data.description} uiHandler = {{setDesc,setTitle}} />
                <Body uiHandler={uiHandler2} noe={noe} data={data.data} color={color}/>
            </FormWrapper>
        </>
     );
}
 
export default UpdateTemplate;