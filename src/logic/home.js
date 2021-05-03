import { postToBackend } from "./repository";


export const getLog = (token,{setLogs}) => {
    const endpoint = `/admin/logs/get`;
    const data = {
        auth_token:token
    }

    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer forms_jwt_cookie`
        },
        withCredentials: true
    }
    postToBackend({endpoint,data,config},(err,info)=>{
        if(err){
            console.log(err);
        }else{
            setLogs(info.msg);
        }
    });
}

export const swatchHandler = (setColor) => (color,event) => {

    console.log(color);
    setColor(color.hex);

}