import { 
    makeStyles
}from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor:'#ffffff'

    },
    text:{
        color:'#4f4f4f',
        paddingInline:'4px',
        fontWeight:'500',
        fontSize:'x-large'
    },
    list: {
        width: 250,
    },
    heading:{

    },
    container:{
        margin:0,
        width:'max-content',
        position:'absolute',
        right:16
    },
    button:{
        cursor:'pointer'
    }
}));

export default useStyles;