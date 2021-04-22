import dotenv from 'dotenv';
const axios = require('axios');
dotenv.config();

const baseUrl = process.env.REACT_APP_backend_api_url;

// console.log(baseUrl);

export const postToBackend = ({endpoint,data,config},callback) => {
    axios.post(baseUrl + endpoint,JSON.stringify(data),config).then(response=>{
        
        response.data.status = 200;
        return callback(null,response.data);

    }).catch(err=>{

        console.log(err);
        return callback(err);

    });
}