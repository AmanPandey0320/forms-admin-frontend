export const loginBtnClickHandler = (history,username,password) => {
    alert(username+password)
    history.push('/home');
}