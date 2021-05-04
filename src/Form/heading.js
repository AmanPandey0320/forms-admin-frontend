import React from 'react';
import { HeadingWrapper,HeadingElement } from './styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { headingStyles } from '../assets/styles/newtemplate'

const useStyle = makeStyles(headingStyles)

const Heading = (props) => {
    const classes = useStyle();
    const theme = createMuiTheme({
        palette:{
            primary:{
                main:props.color
            }
        }
    });
    const { uiHandler } = props;
    const {setDesc,setTitle} = uiHandler;
    return ( 
        <HeadingWrapper borderColor={props.color}>
            <ThemeProvider theme={theme}>
                <HeadingElement>
                    <TextField
                        id="form_title_txt"
                        label="Title"
                        defaultValue="Untitled form"
                        InputProps={{
                            classes: {
                            input: classes.resize,
                            },
                        }}
                        onChange={e => setTitle(e.target.value)}
                        color='primary'
                        className={classes.textField}
                        autoFocus={true}/>
                </HeadingElement>
                <HeadingElement>
                    <TextField
                        id="form_description_txt"
                        label="Description"
                        defaultValue="This is the form description"
                        style={{width:'100%'}}
                        color="primary"
                        onChange={e => setDesc(e.target.value)}
                        multiline={true}
                        autoFocus={true}
                    />
                    <div>&nbsp;</div>
                </HeadingElement>
            </ThemeProvider>
            
        </HeadingWrapper>
     );
}

 
export default Heading;