import React from 'react';
import { BodyWrapper } from './styles';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import FormElement from './element';

const Body = (props) => {
    const { color,uiHandler,noe } = props;
    let { data } = props;
    const theme = createMuiTheme({
        palette:{
            primary:{
                main:color
            }
        }
    });
    return ( 
        <BodyWrapper>
            <ThemeProvider theme={theme}>
                {
                    data.map((element,index)=><FormElement key={index} toe={noe == undefined ? element.type:noe[index]} data={element} index={index} formHandler = {uiHandler}/>)
                }
            </ThemeProvider>
        </BodyWrapper>
     );
}
 
export default Body;