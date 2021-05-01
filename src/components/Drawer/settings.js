import React from 'react';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ImCross } from 'react-icons/im'
import { themes } from '../../assets/data/theme'

const SettingDrawer = (props) => {
    const { settingDrawer,toggleSettingDrawer,classes,setHeader } = props
    return ( 
        <>
            <React.Fragment>
                <Drawer anchor="right" open={settingDrawer} onClose={toggleSettingDrawer(false)}>
                    <div className={clsx(classes.list)} role="presentation" onKeyDown={toggleSettingDrawer(false)}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography className={classes.heading}>Header</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem onClick={() => {setHeader(null)}} button>
                                        <ListItemIcon><ImCross/></ListItemIcon>
                                        <ListItemText>
                                            <Typography>
                                                Remove headers
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    {
                                        themes.map(theme => {
                                            return(
                                                <ListItem key={theme.id} onClick={()=>{setHeader(theme.id-1)}} button>
                                                    <div>
                                                        <img src={theme.img} width="100%"/>
                                                    </div>
                                                </ListItem>
                                            );
                                        })
                                    }
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Drawer>
            </React.Fragment>
        </>
     );
}
 
export default SettingDrawer;