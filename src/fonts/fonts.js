import { createGlobalStyle } from 'styled-components';

import FontGlobalWoff from './Font Awesome 5 Free Regular.woff';
import FontGlobalWoff2 from './Font Awesome 5 Free Regular.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${FontGlobalWoff}) format('woff2'),
        url(${FontGlobalWoff2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;