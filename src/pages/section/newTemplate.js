import React from 'react';
import Header from '../../Form/headder';
import { themes } from '../../assets/data/theme';
import { FormWrapper } from '../../Form/styles';
import Heading from '../../Form/heading';

const NewTemplate = (props) => {

    const { color, bgcolor,header } = props;

    React.useEffect(()=>{
        document.body.style.backgroundColor = bgcolor;

        return () => {
            document.body.style.backgroundColor = '#ffffff';
        }
    },[color,bgcolor,header])

    return ( 
        <FormWrapper>
                <Header bg={header != null ? themes[header].img : null} />
                <Heading color={color}/>
        </FormWrapper>
     );
}
 
export default NewTemplate;