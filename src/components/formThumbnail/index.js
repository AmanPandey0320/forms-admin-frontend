import React from 'react';
import  { ThumbnailWrapper,TitleWrapper,AvatarWrapper, Small} from './styles';
import Avatar from 'react-avatar';
import { FaWpforms } from 'react-icons/fa';

const Thumbnail = ({ children,element, ...props }) => {
    return ( 
        <ThumbnailWrapper  borderColor={props.bg} background={props.bg}>
            <AvatarWrapper padding="6px">
                <Avatar color={element.theme.color} name={element.title} size="132" />
            </AvatarWrapper>
            <TitleWrapper>
                <div>
                    <FaWpforms size="1.3em" color={element.theme.color} />
                    <span style={{verticalAlign:'top'}}>{element.title}</span>
                </div>
            </TitleWrapper>
            <div style={{textAlign:'right'}}>
                <Small fontSize="11px" color="grey" >By:&nbsp;{element.created_by}</Small>
            </div>
        </ThumbnailWrapper>
     );
}
 
export default Thumbnail;