import React from 'react';
import Header from '../../Form/headder';
import { themes } from '../../assets/data/theme';
import { FormWrapper } from '../../Form/styles';
import Heading from '../../Form/heading';
import Body from '../../Form/body';

const NewTemplate = (props) => {

    const { color, bgcolor,header } = props;
    const [title,setTitle] = React.useState('Untitled form');
    const [decs,setDesc] = React.useState('This is the form description');
    const [form_data,setForm_data] = React.useState([]);

    const uiHandler = ({type,data,index}) => {
        if(type === 'ADD_TO_FORM'){
            if(index < form_data.length){
                let new_form_data = form_data;
                new_form_data[index] = data;
                setForm_data([...new_form_data])
            }else{
                setForm_data([...form_data,data]);
            }
        }
    }

    React.useEffect(()=>{
        document.body.style.backgroundColor = bgcolor;

        return () => {
            document.body.style.backgroundColor = '#ffffff';
        }
    },[color,bgcolor,header])

    // console.log(title,decs);

    return ( 
        <FormWrapper>
                <Header bg={header != null ? themes[header].img : null} />
                <Heading color={color} title={title} decs={decs} uiHandler = {{setDesc,setTitle}} />
                <Body uiHandler={uiHandler} data={form_data} color={color}/>
        </FormWrapper>
     );
}
 
export default NewTemplate;