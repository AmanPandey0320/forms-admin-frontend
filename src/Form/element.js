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
    const { formHandler,index,data,toe } = props;
    console.log(data);
    const [type,setType] = React.useState(toe);
    const [question,setQuestion] = React.useState(data.question);
    const [required,setRequired] = React.useState(data.required);


    const uiHandler = (action) => {
        if(action.type === 'IN'){
            setType(action.data);
            formHandler({type:'ADD_TO_FORM',data:{...data,type:action.data},index})
        }else if(action.type === 'QUE'){
            setQuestion(action.data);
            formHandler({type:'ADD_TO_FORM',data:{...data,question:action.data},index})
        }else if(action.type === 'REQ'){
            formHandler({type:'ADD_TO_FORM',data:{...data,required:action.data},index})
            setRequired(action.data);
        }else if(action.type === 'SET_OPTION'){
            formHandler({type:'ADD_TO_FORM',data:{...data,options:action.data},index})
        }else if(action.type === 'SET_DATE_TIME'){
            formHandler({type:'ADD_TO_FORM',data:{...data,date:action.data.one,time:action.data.two},index})
        }
    }

    return ( 
        <BodyElement>
            <Question type={type} question={question} elid={`QUE_${index}`} uiHandler={uiHandler}/>
            { type === 'ST' && <SmallText required={required} elid={`${type}_${index}`} index={index}  uiHandler={uiHandler}/>}
            { type === 'PG' && <Paragraph required={required} elid={`${type}_${index}`} index={index} uiHandler={uiHandler}/>}
            { type === 'SO' && <SingleMCQ options={data.options} elid={`${type}_${index}`} index={index} required={required} uiHandler={uiHandler}/>}
            { type === 'MO' && <MultipleMCQ required={required} elid={`${type}_${index}`} index={index} options={data.options} uiHandler={uiHandler}/>}
            { type === 'DD' && <ListDD required={required} elid={`${type}_${index}`} index={index}  uiHandler={uiHandler}/>}
            { type === 'FU' && <FileUpload id={1} required={required} elid={`${type}_${index}`} index={index} uiHandler={uiHandler}/>}
        </BodyElement>
     );
}

export default Element;