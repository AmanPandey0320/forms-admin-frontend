export const headingStyles = (theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
    },
    //style for font size
    resize:{
      [theme.breakpoints.down('xs')]:{
          fontSize:18
      },
      [theme.breakpoints.up('sm')]:{
          fontSize:24
      },
      [theme.breakpoints.up('md')]:{
          fontSize:30
      },
      [theme.breakpoints.up('lg')]:{
          fontSize:36
      }
    },
})