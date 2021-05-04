import React from 'react';
import { BodyElement} from './styles';
import Question from './Elements/question';

const Element = (props) => {
    const [type,setType] = React.useState('ST');
    const [question,setQuestion] = React.useState(null);
    const uiHandler = (action) => {
        if(action.type === 'IN'){
            setType(action.data);
        }else if(action.type === 'QUE'){
            setQuestion(action.data);
        }
    }
    return ( 
        <BodyElement>
            <Question type={type} uiHandler={uiHandler} id={1}/>
            <span>{type}</span>
            <span>{question}</span>
        </BodyElement>
     );
}
 
export default Element;