import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const renderTheme = (children) => {
    return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export const rerenderTheme = (rerender, children) => {
    return rerender(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
