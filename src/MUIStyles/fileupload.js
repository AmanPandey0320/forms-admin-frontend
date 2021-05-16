import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme =>({
    formControl:{
        marginLeft:theme.spacing(1),
        marginTop:theme.spacing(1),
    },
    iconWrapper:{
        marginBottom:theme.spacing(2),
        width:'100%',
        float:'left',
        paddingInline:theme.spacing(1),
        display:'flex',
        flexDirection:'row'
    },
    icon:{
        width:'5%',
        verticalAlign:'middle'
    },
    text:{
        width:'90%',
        fontSize:'small'
    }
}));

export default useStyles