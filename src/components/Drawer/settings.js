import React from 'react';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SettingDrawer = (props) => {
    const { settingDrawer,toggleSettingDrawer,classes } = props
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
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Drawer>
            </React.Fragment>
        </>
     );
}
 
export default SettingDrawer;