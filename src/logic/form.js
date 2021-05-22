import { postToBackend } from "./repository";
// import  { createStore } from 'redux';
// import rootReducer from '../Reducers/rootReducer';
// const store = createStore(rootReducer);

export const addToForm = (form,position,data,uiHandler) => {
    let newForm = [];
    form.forEach((element,index) => {
        if(position === index){
            newForm.push(data);
        }
        newForm.push(element);
    });

    uiHandler(newForm);
}

export const submit_template = (data,uiHandler,uiErrorHandler) => {
    uiHandler(true);
    const endpoint = '/admin/template/create';
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer forms_jwt_cookie`
        },
        withCredentials: true
    }
    postToBackend({endpoint,data,config},(err,result)=>{
        uiHandler(false);
        // console.log(err,result);
        if(err){
            console.log(err);
            uiErrorHandler({
                open:true,
                text:err.message
            });
        }else{
            // console.log(result);
            if(result.status === 200){
                uiErrorHandler({
                    open:true,
                    text:'Template created',
                    type:'success'
                });
                // console.log(result);
            }else{
                uiErrorHandler({
                    open:true,
                    text:result.message
                });
            }
        }
    });
}