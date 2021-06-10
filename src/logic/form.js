import { postToBackend } from "./repository";

const config = {
    headers: {
        'Content-Type' : 'application/json',
        Authorization: `Bearer forms_jwt_cookie`
    },
    withCredentials: true
}

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

export const submit_template = (data,uiHandler,uiErrorHandler,history,setForm_data) => {
    uiHandler(true);
    const endpoint = '/admin/template/create';
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
            // console.log(result.message);
            if(result.status === 200){
                uiErrorHandler({
                    open:true,
                    text:'Template created',
                    type:'success'
                });
                history.push('/home/template')
                setForm_data([{
                    type:'ST',
                    question:null,
                    required:false
                }]);
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

export const retrive_template = (auth_token,cb) => {
    const endpoint = `/admin/template/read`;
    const data = {auth_token};
    
    postToBackend({endpoint,data,config},(error,result)=>{
        if(error){
            console.log(error);
            return cb(error.message);
        }else{
            if(result.status === 200){
                return cb(null,result.message);
            }
        }
        
    })
}

export const addBtnClickHandler = (uiHandler,index) => (e) => {
    const data = {
        type:'ST',
        question:null,
        required:false
    }
    // console.log('clicked');
    uiHandler({type:'ADD_TO_FORM',data,index});
}
export const sendBtnClickListener = (uiHandler) => (e) => {
    uiHandler({type:'CREATE_TEMPLATE',data:null,index:null});
}
export const updateBtnClickListener=(uiHandler)=>(e)=>{
    uiHandler({type:'UPDATE_TEMPLATE_DATA',data:null,index:null});
}