import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme =>({
    formControl:{
        marginLeft:theme.spacing(1),
        marginTop:theme.spacing(1),
    },
    iconWrapper:{
        marginBottom:theme.spacing(2),
        width:'max-content',
        float:'left',
        paddingInline:theme.spacing(1)
    }
}));

export default useStyles