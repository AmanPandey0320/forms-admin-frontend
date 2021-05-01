import Container  from '@material-ui/core/Container';
import React from 'react';
import Header from '../../Form/headder';
import  H025  from '../../assets/images/headers/H025.png';
import { themes } from '../../assets/data/theme';
import { useMediaQuery } from 'react-responsive'

const NewTemplate = (props) => {
    const constrains = useMediaQuery({
        query:'(max-device-width: 768px)'
    })?{width:'100%'}:{width:'64%'};

    return ( 
        <div style={{margin:'auto',width:constrains.width}}>
            <br/>
            <Container>
                <Header bg={props.header != null ? themes[props.header].img : null} />
            </Container>
        </div>
     );
}
 
export default NewTemplate;