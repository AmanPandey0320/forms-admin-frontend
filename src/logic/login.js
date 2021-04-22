import { postToBackend } from "./repository";
import  { createStore } from 'redux';
import rootReducer from '../Reducers/rootReducer';
const store = createStore(rootReducer);

export const loginBtnClickHandler = (history,username,password,{setBackDrop,setError}) => {
    const endpoint = '/admin/auth/login';
    const data = {username,password};
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer forms_jwt_cookie`
        },
        withCredentials: true
    }
    postToBackend({endpoint,data,config},(err,result)=>{
        if(err){
            console.log(err);
            setBackDrop(false);
            setError({
                open:true,
                text:err.message
            });
        }else{
            // console.log(result);
            if(result.ok){
                store.dispatch({type:'SET_USER',token:result.auth_token})
                history.push('/home');
            }else{
                setBackDrop(false);
                setError({
                    open:true,
                    text:result.message
                });
            }
        }
    });
    
}