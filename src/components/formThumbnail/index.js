import React from 'react';
import  { ThumbnailWrapper,TitleWrapper,AvatarWrapper, Small, Span} from './styles';
import Avatar from 'react-avatar';
import { FaWpforms } from 'react-icons/fa';
import { Tooltip } from '@material-ui/core';

const Thumbnail = ({ children,element, ...props }) => {
    return ( 
        <ThumbnailWrapper  borderColor={props.bg} background={props.bg}>
            <AvatarWrapper padding="6px">
                <Avatar color={element.theme.color} name={element.title} size="132px" />
            </AvatarWrapper>
            <TitleWrapper>
                <div>
                    <FaWpforms size="1.3em" color={element.theme.color} />
                    {/* <span style={{verticalAlign:'top',wordWrap:'break-word'}}>{element.title}</span> */}
                    <Tooltip title={element.title} >
                        <Span>{element.title.slice(0,12)}</Span>
                    </Tooltip>
                </div>
            </TitleWrapper>
            <div style={{textAlign:'right'}}>
                <Small fontSize="11px" color="grey" >By:&nbsp;{element.created_by}</Small>
            </div>
        </ThumbnailWrapper>
     );
}
 
export default Thumbnail;