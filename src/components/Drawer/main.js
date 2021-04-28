import React from 'react';
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
import { RiSettingsLine,RiSendPlane2Line} from 'react-icons/ri';

const MainDrawer = (props) => {
    const { classes,drawer,toggleDrawer,toggleSettingDrawer,setComponent,component } = props
    return ( 
        <>
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
                            {
                                component === 'new' && 
                                <>
                                    <Divider/>
                                    <ListItem onClick={toggleSettingDrawer(true)} button>
                                        <ListItemIcon><RiSettingsLine/></ListItemIcon>
                                        <ListItemText>Setting</ListItemText>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon><RiSendPlane2Line/></ListItemIcon>
                                        <ListItemText>Send Template</ListItemText>
                                    </ListItem>
                                </>
                            }
                            <Divider/>
                            <ListItem onClick={()=>{alert('logged out')}} button>
                                <ListItemIcon><AiOutlineLogout/></ListItemIcon>
                                <ListItemText>Log-out</ListItemText>
                            </ListItem>
                            
                        </List>
                    </div>
                </Drawer>
            </React.Fragment>
        </>
     );
}
 
export default MainDrawer;