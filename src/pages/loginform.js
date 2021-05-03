import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardAction from  '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import logo from '../assets/images/logo.svg';
import { FaUser } from 'react-icons/fa';
import { AiFillEye,AiFillEyeInvisible,AiOutlineLogin } from 'react-icons/ai';
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from 'react-router-dom';
import { loginBtnClickHandler } from '../logic/login';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import SnackBar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    }
}));

const Login = () => {
    const [passee,setPassee] = React.useState(false);
    const [username,setUsername] = React.useState(null);
    const [password,setPassword] = React.useState(null);
    const [backDrop,setBackDrop] = React.useState(false);
    const [snackbar,setSnackbar] = React.useState(false);
    const [error,setError] = React.useState({
        open:false,
        text:'Some Error'
    });
    const uiState = {setBackDrop,setError};
    const history = useHistory();
    const classes = useStyles();

    return ( 
        <div style={{height:'100vh',textAlign:'center'}}>
            <div className="login-img-div">
                <img className="login-img-logo" alt="logo" src={logo}/>
            </div>
            <div className="login-card-div">
                
                <Card>
                    <h4>Admin Login</h4>
                    <CardContent>
                        <TextField id="username" label="User name" onChange={(event)=>{setUsername(event.target.value)}}
                            InputProps={{
                                endAdornment:<InputAdornment><IconButton><FaUser size='0.7em'/></IconButton></InputAdornment>
                            }}
                        />
                        <br/><br/>
                        <TextField id="password" label="Password" type={passee?'text':'password'} onChange={(event)=>{setPassword(event.target.value)}}
                            InputProps={{
                                endAdornment:<InputAdornment><IconButton onClick={()=>{setPassee(!passee)}}>{passee?<AiFillEyeInvisible size='0.75em'/>:<AiFillEye size='0.75em'/>}</IconButton></InputAdornment>
                            }}
                        />
                    </CardContent>
                    <CardAction>
                        <div style={{margin:'auto'}}>
                            <Button variant="contained" onClick = {()=>{setBackDrop(true);setTimeout(()=>loginBtnClickHandler(history,username,password,uiState),5000)}} color="primary"><AiOutlineLogin/>&nbsp;&nbsp;Login</Button>
                        </div>
                    </CardAction>
                </Card>
            </div>
            <Backdrop onClick={()=>{setSnackbar(true)}} className={classes.backdrop} open={backDrop} >
                <CircularProgress color="primary" />
                    <SnackBar open={snackbar} autoHideDuration={3000} onClose={()=>{setSnackbar(false)}}>
                        <Alert onClose={()=>{setSnackbar(false)}} severity="info">
                            Please wait while we login!
                        </Alert>
                    </SnackBar>
            </Backdrop>
            <SnackBar open={error.open} autoHideDuration={5000} onClose={()=>{setError(false)}}>
                <Alert onClose={()=>{setError(false)}} severity="error">
                    {error.text}
                </Alert>
            </SnackBar>
        </div>
     );
}
 
export default Login;