import { useEffect, useState } from "react";
import { getLog } from "../../logic/home";
import Table from '../../components/tables'
import { connect } from 'react-redux'

const Logs = (props) => {
    const [logs,setLogs] = useState([]);

    // console.log(props.token);

    useEffect(()=>{
        getLog(props.token,{setLogs});
    },[props.token]);
    console.log(logs);
    return ( 
        <div style={{margin:'2%'}}>
            <Table logs = {logs}/>
        </div>
     );
}

const mapStatetoProps = (state) => {
    return{
        token:state.user.token
    }
}
 
export default connect(mapStatetoProps)(Logs);