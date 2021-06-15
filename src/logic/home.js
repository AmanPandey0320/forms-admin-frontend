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

export const formCreator = (noe) => {
    let formdata = [];
    noe.forEach((toe,index)=> {
        const que = document.getElementById(`QUE_${index}`).value;
        const req = document.getElementById(`REQ_${index}`).checked;
        let data = {
            question:que,
            required:req,
            type:toe
        }
        formdata.push(data)
    });
    console.log(formdata);
}