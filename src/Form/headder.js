import React from 'react';

const Header = (props) => {
    return ( 
        <>
        {
            props.bg &&
            <div style={{height:'20vh'}}>
                <img width="100%" height="100%" style={{borderRadius:'10px'}} src={props.bg}/>
            </div>
        }
        </>
     );
}
 
export default Header;