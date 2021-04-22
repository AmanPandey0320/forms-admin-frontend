import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { GrDatabase } from 'react-icons/gr';
import { HiTemplate } from 'react-icons/hi';
import { CgTemplate } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
import Logs from './section/logs';
import NewTemplate from './section/newTemplate';
import Template from './section/template';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
}));

const Home = (props) => {
    const classes = useStyles();
    const [drawer,setDrawer] = React.useState(false);
    const [component,setComponent] = React.useState('tempalte');
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawer(open)
    };
    
    return ( 
        <div>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton edge="start" onClick={toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Forms Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <React.Fragment >
                <Drawer anchor='left' open={drawer} onClose={toggleDrawer(false)}>
                    <div className={clsx(classes.list)} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                        <List>
                            <ListItem onClick={()=>{setComponent('tempalte')}} button>
                                <ListItemIcon><HiTemplate/></ListItemIcon>
                                <ListItemText>Templates</ListItemText>
                            </ListItem>
                            <ListItem onClick={()=>{setComponent('new')}} button>
                                <ListItemIcon><CgTemplate/></ListItemIcon>
                                <ListItemText>New Template</ListItemText>
                            </ListItem>
                            <ListItem onClick={()=>{setComponent('log')}} button>
                                <ListItemIcon><GrDatabase/></ListItemIcon>
                                <ListItemText>Logs</ListItemText>
                            </ListItem>
                            <Divider/>
                            <ListItem onClick={()=>{alert('logged out')}} button>
                                <ListItemIcon><AiOutlineLogout/></ListItemIcon>
                                <ListItemText>Log-out</ListItemText>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </React.Fragment>
            
            { component === 'tempalte' && <Template/>}
            { component === 'new' && <NewTemplate/>}
            { component === 'log' && <Logs/>}

        </div>
     );
}

const HomeWrapper = (props) => {
    console.log(props);
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

