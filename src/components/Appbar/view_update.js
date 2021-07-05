import React from 'react';
import useStyles from './styles';
import { 
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Tooltip
} from '@material-ui/core';
import { FaWpforms } from 'react-icons/fa'
import { Container } from '@material-ui/core';
import { VscSettings} from 'react-icons/vsc';
import { CgAddR } from 'react-icons/cg';
import { AiOutlineFileSync } from 'react-icons/ai';

class MainAppBar extends React.Component{
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    handleAddElement = (event) => {
        this.props.uiHandler({
            type:'ADD_TO_FORM',
            data:{
                type:'ST'
            }
        });
    }
    render(){
        return(
            <AppBar position="sticky" className = {this.props.classes.root}>
                <Toolbar>
                    {/*TODO -> this needs to be changed to logo*/}
                    <FaWpforms color="#4f4f4f" size="2em"/>{/* <- this one here */}
                    <Typography className={this.props.classes.text}>{this.props.title}</Typography>
                    <Container className={this.props.classes.container} >
                        <Tooltip title="Add new element">
                            <IconButton onClick={this.handleAddElement} className={this.props.classes.button}>
                                <CgAddR color="#4f4f4f"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Form settings">
                            <IconButton className={this.props.classes.button} onClick={this.props.toggleDrawer(true)} >
                                <VscSettings color="#4f4f4f"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Sync form">
                            <IconButton onClick={ this.props.updateHandler } className={this.props.classes.button}>
                                <AiOutlineFileSync color="#4f4f4f"/>
                            </IconButton>
                        </Tooltip>
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