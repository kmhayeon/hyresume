// 전체 스타일
import reset from 'styled-reset';
import {createGlobalStyle} from "styled-components";



const globalstyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body{
        background-color: #ffffff;
    }
`;


export default globalstyle;


