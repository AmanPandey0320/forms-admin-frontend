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

export const getOneTemplate = (id,auth_token) => {
    return new Promise((resolve,reject)=>{
        const endpoint = `/admin/template/read-one`;
        const data = {auth_token,id};
        postToBackend({endpoint,data,config},(error,result)=>{
            if(error){
                console.log(error);
                return reject({
                    data:[],
                    message:error.message
                });
            }else{
                if(result.status === 200){
                    return resolve(result.data)
                }else{
                    return reject({
                        data:{},
                        message:'Some unknown error occured!'
                    });
                }
            }
        })
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
    uiHandler({type:'TEST',data:null,index:null});
}
export const updateBtnClickListener=(uiHandler)=>(e)=>{
    uiHandler({type:'UPDATE_TEMPLATE_DATA',data:null,index:null});
}