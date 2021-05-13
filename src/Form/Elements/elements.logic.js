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
    console.log(data);
    uiHandler({type:'REMV_OPTION',data:data});
}

const appendOption = (state,uiHandler,option) => (event) => {
    const index = state.length-1;
    console.log(option);
    let data = [...state.slice(0,index),{id:index+1,text:option},{id:index+2,text:'New option'}];
    if(index < 0){
        data = [...state.slice(0,index),{id:index+1,text:'New option'}];
    }
    
    uiHandler({type:'APND_OPTION',data:data});
}

export {editOption,removeOption,appendOption};