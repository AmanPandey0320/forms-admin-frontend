import { formCreator } from './home';
import { postToBackend } from './repository';
import { store } from '../Reducers/rootReducer'
const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer forms_jwt_cookie`
    },
    withCredentials: true
}
export const updateBtnClickListener = (header, color, bgColor, template_id, noe, auth_token) => (event) => {
    const data = formCreator(noe);
    const title = document.getElementById('form_title_txt').value;
    const description = document.getElementById('form_description_txt').value;
    const theme = {
        bgColor,
        color,
        header
    };
    const enabled = true;
    const form = {
        auth_token,
        title,
        description,
        theme,
        data,
        enabled,
        template_id
    }
    const sender = {
        endpoint: '/admin/template/update',
        data: form,
        config: config
    }
    postToBackend(sender, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
        }
    });
    store.dispatch({
        form,
        type: 'SAVE_FORM',
        id: template_id,
    });
    let { forms } = store.getState().template
    forms.forEach(element => {
        if (element.template_id === template_id) {
            element.theme = { ...theme };
        }
    });

    store.dispatch({
        forms,
        type: 'SET_DATA'
    });

}