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
import { themes } from '../../assets/data/theme';
import { SwatchesPicker } from 'react-color';
import { swatchHandler } from '../../logic/home';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const SettingDrawer = (props) => {
    const { settingDrawer,toggleSettingDrawer,classes,setHeader,setBgcolor,setColor } = props;
    const [color_for,setColor_for] = React.useState('bg');
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
                                                        <img src={theme.img} alt={`header img ${theme.id}`} width="100%"/>
                                                    </div>
                                                </ListItem>
                                            );
                                        })
                                    }
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography>Colors</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <Typography>Select color</Typography>
                                    <br/>
                                    <SwatchesPicker width='200px' onChange={swatchHandler((color_for === 'bg' ? setBgcolor:setColor))}/>
                                    <br/>
                                    <FormControl component="fieldset">
                                    <FormLabel component="legend">Color for:</FormLabel>
                                    <RadioGroup name="color_for" value={color_for} onChange={(event)=>setColor_for(event.target.value)}>
                                        <FormControlLabel
                                            value="bg"
                                            control={<Radio color='primary'/>}
                                            label="Background"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="bd"
                                            control={<Radio color='primary'/>}
                                            label="Body"
                                            labelPlacement="end"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                </div>
                                
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Drawer>
            </React.Fragment>
        </>
     );
}
 
export default SettingDrawer;