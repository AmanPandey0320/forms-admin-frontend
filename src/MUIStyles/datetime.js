import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme =>({
    formControl:{
        marginLeft:theme.spacing(1),
        marginTop:theme.spacing(1),
    },
    checkbox:{
        display:'flex',
        flexDirection:'row'
    }
}));

export default useStyles