import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    formControl:{
        width:'100%',
        marginLeft:theme.spacing(1),
        display:'flex',
        flexDirection:'row',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column'
        }
    },
    textField:{
        width:'72%',
        [theme.breakpoints.down('xs')]:{
            width:'90%'
        }
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

export default useStyles;