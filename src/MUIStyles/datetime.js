import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme =>({
    formControl:{
        marginLeft:theme.spacing(1),
        marginTop:theme.spacing(1),
    },
    checkbox:{
        display:'flex',
        flexDirection:'row'
    },
    switch:{
        maxWidth:'22%',
        marginLeft:theme.spacing(2),
        [theme.breakpoints.down('xs')]:{
            maxWidth:'90%',
            marginLeft:0,
            marginTop:theme.spacing(1)
        }
    }
}));

export default useStyles