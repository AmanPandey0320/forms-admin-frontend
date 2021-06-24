import React from 'react';
import useStyles from './styles';
import { 
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from '@material-ui/core';
import { FaWpforms } from 'react-icons/fa'
import { Container } from '@material-ui/core';
import { VscSettings } from 'react-icons/vsc'

class MainAppBar extends React.Component{
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        return(
            <AppBar position="sticky" className = {this.props.classes.root}>
                <Toolbar>
                    <FaWpforms color="#4f4f4f" size="2em"/>
                    <Typography className={this.props.classes.text}>{this.props.title}</Typography>
                    <Container className={this.props.classes.container} >
                        <IconButton className={this.props.classes.button} onClick={this.props.toggleDrawer(true)} >
                            <VscSettings color="#4f4f4f"/>
                        </IconButton>
                    </Container>
                </Toolbar>
            </AppBar>
        )
    }
}

const ExportedAppBar = (props) => {
    const muiClasses = useStyles();
    return <MainAppBar classes={muiClasses} {...props}/>
}

export default ExportedAppBar;