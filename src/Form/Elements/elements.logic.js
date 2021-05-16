import { fileIcons } from '../../assets/data/form'

const editOption = (index,state,uiHandler,option) => (event) => {
    if(event.key === "Enter"){
        let data = [...state.slice(0,index),{id:index+1,text:event.target.value},...state.slice(index+1)];
        uiHandler({type:'EDIT_OPTION',data:data});
    }
}

const removeOption = (index,state,uiHandler) => (event) => {
    let data = [];
    var id = 1;
    state.forEach((element,idx) => {
        if(idx !== index)
        data.push({id:id,text:element.text});
        id++;
    });
    uiHandler({type:'REMV_OPTION',data:data});
}

const appendOption = (state,uiHandler,option) => (event) => {
    const index = state.length-1;
    let data = [...state.slice(0,index),{id:index+1,text:option},{id:index+2,text:'New option'}];
    if(index < 0){
        data = [...state.slice(0,index),{id:index+1,text:'New option'}];
    }
    
    uiHandler({type:'APND_OPTION',data:data});
}

const mimeTypeIcon = (type,name)=>{
    const [sup,sub] = type.split('/');
    console.log(type,name);
    const name_splt = name.split('.');
    const ext = name_splt[name_splt.length - 1];
    switch (sup) {
        case 'image':return fileIcons.image;
        case 'video':return fileIcons.video;
        case 'audio':return fileIcons.audio;
        case 'application':{
            switch (sub) {
                case 'json':return fileIcons.json;
                case 'x-zip-compressed':return fileIcons.zip;
                case 'vnd.openxmlformats-officedocument.wordprocessingml.document': return fileIcons.word;
                case 'msword':return fileIcons.word;
                case 'vnd.openxmlformats-officedocument.presentationml.presentation':return fileIcons.powerPoint;
                case 'pdf':return fileIcons.pdf;
                case 'vnd.ms-excel':return fileIcons.excel;
                case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet':return fileIcons.excel;
                case 'octet-stream':return fileIcons.windows;//exe | psd
                case 'vnd.debian.binary-package':return fileIcons.linux;
                case 'vnd.android.package-archive':return fileIcons.apk;
                case 'ecmascript':return fileIcons.js;
                case 'javascript':return fileIcons.js;
                case 'mspowerpoint':return fileIcons.powerPoint;
                case 'vnd.ms-powerpoint':return fileIcons.powerPoint;
                case 'powerpoint':return fileIcons.powerPoint;
                case 'x-mspowerpoint':return fileIcons.powerPoint;
                case 'x-msdownload':return fileIcons.windows;

                default:return fileIcons.code;
            }
        }
        case 'text':{
            switch (sub) {
                case 'csv':return fileIcons.excel;
                case 'css':return fileIcons.css;
                case 'html':return fileIcons.html;
                case 'javascript':return fileIcons.js;
                case 'x-c':return fileIcons.cpp;
                case 'x-java-source':return fileIcons.java;
                case 'x-script.phyton':return fileIcons.python;
                case 'plain':{
                    switch (ext) {
                        case 'py':return fileIcons.python;
                        default:return fileIcons.text
                    }
                }
                default:return fileIcons.text;
            }
        }
    
        default:{
            switch (ext) {
                case 'cpp':return fileIcons.cpp;
                case 'java':return fileIcons.java;
                default:return fileIcons.file;
            }
        }
    }
}

export {editOption,removeOption,appendOption,mimeTypeIcon};