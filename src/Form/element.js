import React from 'react';
import { BodyElement} from './styles';
import Question from './Elements/question';
import SmallText from './Elements/smallText';
import Paragraph from './Elements/paragraph';
import SingleMCQ from './Elements/singleMCQ';
import MultipleMCQ from './Elements/multipleMCQ';
import ListDD from './Elements/list';
import FileUpload from './Elements/fileUpload';

const Element = (props) => {
    const [type,setType] = React.useState('MO');
    const [question,setQuestion] = React.useState(null);
    const [required,setRequired] = React.useState(false)

    const uiHandler = (action) => {
        if(action.type === 'IN'){
            setType(action.data);
        }else if(action.type === 'QUE'){
            setQuestion(action.data);
        }else if(action.type === 'REQ'){
            setRequired(action.data);
        }
    }

    return ( 
        <BodyElement>
            <Question type={type} uiHandler={uiHandler} id={1}/>
            { type === 'ST' && <SmallText required={required} uiHandler={uiHandler}/>}
            { type === 'PG' && <Paragraph required={required} uiHandler={uiHandler}/>}
            { type === 'SO' && <SingleMCQ id={1} required={required} uiHandler={uiHandler}/>}
            { type === 'MO' && <MultipleMCQ required={required} uiHandler={uiHandler}/>}
            { type === 'DD' && <ListDD required={required} uiHandler={uiHandler}/>}
            { type === 'FU' && <FileUpload id={1} required={required} uiHandler={uiHandler}/>}
        </BodyElement>
     );
}
 
export default Element;