import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './styles/globalstyle'
import {theme} from "./styles/theme";
import {ThemeProvider} from 'styled-components';

ReactDOM.render(
    <div>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </div>,
    document.getElementById('root'));