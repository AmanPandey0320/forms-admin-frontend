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
    },
    switch:{
        maxWidth:'22%',
        marginLeft:theme.spacing(2),
        float:'right',
        [theme.breakpoints.down('xs')]:{
            maxWidth:'90%',
            marginLeft:0,
            marginTop:theme.spacing(1)
        }
    }
}));

export default useStyles