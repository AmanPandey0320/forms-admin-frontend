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
    return ( 
        <HeadingWrapper borderColor={props.color}>
            <ThemeProvider theme={theme}>
                <HeadingElement>
                    <TextField
                        id="form_title_txt"
                        label="Title"
                        defaultValue={props.title}
                        InputProps={{
                            classes: {
                            input: classes.resize,
                            },
                        }}
                        color='primary'
                        className={classes.textField}
                        autoFocus={true}/>
                </HeadingElement>
                <HeadingElement>
                    <TextField
                        id="form_description_txt"
                        label="Description"
                        defaultValue={props.decs}
                        style={{width:'100%'}}
                        color="primary"
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