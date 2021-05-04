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