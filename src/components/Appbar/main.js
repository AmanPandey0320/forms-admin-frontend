import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { RiSettingsLine,RiSendPlane2Line,RiAddFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import Tooltip from '@material-ui/core/Tooltip';

const MainAppbar = (props) => {
    const { classes,toggleDrawer,toggleSettingDrawer,component,uiHandler,index } = props;
    const addBtnClickHandler = () => (e) => {
        const data = {
            type:'ST',
            question:null,
            required:false
        }
        // console.log('clicked');
        uiHandler({type:'ADD_TO_FORM',data,index});
    }
    const sendBtnClickListener = () => (e) => {
        uiHandler({type:'CREATE_TEMPLATE',data:null,index:null});
    }
    return ( 
        <>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton edge="start" onClick={toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Admin Panel
                    </Typography>
                    {component === 'new' && <div className={classes.sectionDesktop}>
                        <IconContext.Provider value={{color:'white'}}>
                            <Tooltip title="Add new item">
                                <IconButton onClick={addBtnClickHandler()}>
                                    <RiAddFill/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Setting">
                                <IconButton onClick={toggleSettingDrawer(true)}>
                                    <RiSettingsLine/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title ="Create">
                                <IconButton onClick={sendBtnClickListener()} >
                                    <RiSendPlane2Line/>
                                </IconButton>
                            </Tooltip>
                        </IconContext.Provider>
                    </div>}
                    {component === 'new' && <div className={classes.sectionMobile}>
                        <IconContext.Provider value={{color:'white'}}>
                            <Tooltip title="Add new item">
                                <IconButton onClick={addBtnClickHandler()} >
                                    <RiAddFill/>
                                </IconButton>
                            </Tooltip>
                        </IconContext.Provider>
                    </div>}
                </Toolbar>
            </AppBar>
        </>
     );
}
 
export default MainAppbar;