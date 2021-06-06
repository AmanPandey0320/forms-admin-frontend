import { postToBackend } from "./repository";


export const getLog = (token,cb) => {
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
            return cb(err.message)
        }else{
            return cb(null,info.msg);
        }
    });
}

export const swatchHandler = (setColor) => (color,event) => {

    console.log(color);
    setColor(color.hex);

}