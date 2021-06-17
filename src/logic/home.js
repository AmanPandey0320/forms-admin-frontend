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
        if(toe === 'SO'){
            const key = `SO_${index}`;
            const radios_count = document.getElementsByName(key).length - 1;
            let options = [];
            for (let index = 0; index < radios_count; index++) {
                options.push({text:document.getElementById(`${key}_OP_${index}`).value,id:index});
            }
            data.options = options;
        }
        formdata.push(data)
    });
    console.log(formdata);
}