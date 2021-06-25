import { formCreator } from './home'
export const updateBtnClickListener = (header,color,bgColor,id,noe) => (event) => {
    let form = formCreator(noe);
    console.log(header,color,bgColor,id,noe,form);
}