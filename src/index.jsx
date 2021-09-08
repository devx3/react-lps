import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../src/templates/Home';
import GlobalStyles from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route to="*" component={Home} />
                </Switch>
            </BrowserRouter>
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
