import React from 'react';
import Header from '../../Form/headder';
import { themes } from '../../assets/data/theme';
import { FormWrapper } from '../../Form/styles';
import Heading from '../../Form/heading';
import Body from '../../Form/body';

const UpdateTemplate = (props) => {

    const {data,uiHandler} = props;
    const { color, bgColor:bgcolor,header } = data.theme;
    const [title,setTitle] = React.useState('Untitled form');
    const [decs,setDesc] = React.useState('This is the form description');

    React.useEffect(()=>{
        document.body.style.backgroundColor = bgcolor;
        console.log(bgcolor);

        return () => {
            document.body.style.backgroundColor = '#ffffff';
        }
    },[color,bgcolor,header])

    return ( 
        <FormWrapper>
                <Header bg={header != null ? themes[header].img : null} />
                <Heading color={color} title={title} decs={decs} uiHandler = {{setDesc,setTitle}} />
                <Body uiHandler={uiHandler} data={data.data} color={color}/>
        </FormWrapper>
     );
}
 
export default UpdateTemplate;