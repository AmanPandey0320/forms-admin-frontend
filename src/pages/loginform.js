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
import { loginBtnClickHandler } from '../logic/login'

const Login = () => {
    const [passee,setPassee] = React.useState(false);
    const [username,setUsername] = React.useState(null);
    const [password,setPassword] = React.useState(null);
    const history = useHistory();

    return ( 
        <div style={{height:'100vh',textAlign:'center'}}>
            <div className="login-img-div">
                <img className="login-img-logo" src={logo}/>
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
                        <TextField id="username" label="Password" type={passee?'text':'password'} onChange={(event)=>{setPassword(event.target.value)}}
                            InputProps={{
                                endAdornment:<InputAdornment><IconButton onClick={()=>{setPassee(!passee)}}>{passee?<AiFillEyeInvisible size='0.75em'/>:<AiFillEye size='0.75em'/>}</IconButton></InputAdornment>
                            }}
                        />
                    </CardContent>
                    <CardAction>
                        <div style={{margin:'auto'}}>
                            <Button variant="contained" onClick = {()=>loginBtnClickHandler(history,username,password)} color="primary"><AiOutlineLogin/>&nbsp;&nbsp;Login</Button>
                        </div>
                    </CardAction>
                </Card>
            </div>
        </div>
     );
}
 
export default Login;