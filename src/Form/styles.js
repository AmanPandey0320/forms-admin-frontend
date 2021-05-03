import styled from 'styled-components';
import { borderColor } from 'styled-system'

export const Div = styled.div`
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
    ${borderColor};
`;

export const FormWrapper = styled.div`
    width:64%;
    margin-inline:auto;
    padding-top:1%;
    @media only screen and (max-width: 768px){
        width:95%;
    }
    
`;