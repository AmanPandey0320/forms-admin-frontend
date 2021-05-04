import styled from 'styled-components';
import { borderColor } from 'styled-system'

export const HeadingWrapper = styled.div`
    margin-top: 0.75%;
    border-top-width: 8px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    padding: 4px 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color:#ffffff;
    display:flex;
    flex-direction:column;
    ${borderColor};
`;

export const BodyElement = styled.div`
    margin-top: 2px;
    border-width: 0px;
    border-style: solid;
    padding: 16px 16px;
    border-radius: 4px;
    background-color:#ffffff;
    display:flex;
    flex-direction:column;
    border-color:#ffffff;
`;
export const BodyWrapper = styled.div`
    margin-top:2px;
    display:flex;
    flex-direction:column;
`;

export const HeadingElement = styled.div`
    margin-top:16px;
`;

export const FormWrapper = styled.div`
    width:64%;
    margin-inline:auto;
    padding-top:1%;
    @media only screen and (max-width: 768px){
        width:95%;
    }
    
`;