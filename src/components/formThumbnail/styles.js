import styled from 'styled-components';
import { 
    background,
    borderColor,
    color,
    fontSize,
    padding
} from 'styled-system';

export const ThumbnailWrapper = styled.div`
    ${background};
    ${borderColor};
    border-style:solid;
    border-width:2.5px;
    border-radius:4px;
    box-shadow: 2px 2px 6px grey;
    :hover{
        cursor:pointer;
    }
`;

export const AvatarWrapper = styled.div`
    ${padding}
`;

export const TitleWrapper = styled.div`
    margin-bottom:4px;
    background-color:#ffffff;
    border-style:solid;
    border-width:0px;
    border-radius:2px;
    border-color:grey;
    padding:4px 6px
`;
export const Small = styled('span')(
    fontSize,
    color
)