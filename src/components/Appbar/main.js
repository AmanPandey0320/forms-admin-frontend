import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { RiSettingsLine,RiSendPlane2Line,RiAddFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import Tooltip from '@material-ui/core/Tooltip';
import { MdUpdate } from 'react-icons/md';
import { addBtnClickHandler,sendBtnClickListener,updateBtnClickListener } from '../../logic/form'

const MainAppbar = (props) => {
    const { classes,toggleDrawer,toggleSettingDrawer,component,uiHandler,index } = props;
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
                     <div className={classes.sectionDesktop}>
                        <IconContext.Provider value={{color:'white'}}>
                        {component === 'new-template' &&<><Tooltip title="Add new item">
                                <IconButton onClick={addBtnClickHandler(uiHandler,index)}>
                                    <RiAddFill/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Setting">
                                <IconButton onClick={toggleSettingDrawer(true)}>
                                    <RiSettingsLine/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title ="Create">
                                <IconButton onClick={sendBtnClickListener(uiHandler)} >
                                    <RiSendPlane2Line/>
                                </IconButton>
                            </Tooltip></>}
                            {
                                component==='view-template' && <Tooltip title="Update template">
                                    <IconButton onClick={updateBtnClickListener(uiHandler)} >
                                        <MdUpdate/>
                                    </IconButton>
                                </Tooltip>
                            }
                        </IconContext.Provider>
                    </div>
                    {component === 'new-template' && <div className={classes.sectionMobile}>
                        <IconContext.Provider value={{color:'white'}}>
                            <Tooltip title="Add new item">
                                <IconButton onClick={addBtnClickHandler(uiHandler,index)} >
                                    <RiAddFill/>
                                </IconButton>
                            </Tooltip>
                        </IconContext.Provider>
                    </div>}
                    {component === 'view-template' && <div className={classes.sectionMobile}>
                        <IconContext.Provider value={{color:'white'}}>
                            <Tooltip title="Update template">
                                <IconButton onClick={updateBtnClickListener(uiHandler)} >
                                    <MdUpdate/>
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