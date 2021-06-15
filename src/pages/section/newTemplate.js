import React from 'react';
import Header from '../../Form/headder';
import { themes } from '../../assets/data/theme';
import { FormWrapper } from '../../Form/styles';
import Heading from '../../Form/heading';
import Body from '../../Form/body';

const NewTemplate = (props) => {

    const { color, bgcolor,header,noe } = props;
    const [title,setTitle] = React.useState('Untitled form');
    const [decs,setDesc] = React.useState('This is the form description');
    const {data,uiHandler} = props;

    React.useEffect(()=>{
        document.body.style.backgroundColor = bgcolor;

        return () => {
            document.body.style.backgroundColor = '#ffffff';
        }
    },[color,bgcolor,header])

    return ( 
        <FormWrapper>
                <Header bg={header != null ? themes[header].img : null} />
                <Heading color={color} title={title} decs={decs} uiHandler = {{setDesc,setTitle}} />
                <Body uiHandler={uiHandler} noe={noe} data={data} color={color}/>
        </FormWrapper>
     );
}
 
export default NewTemplate;