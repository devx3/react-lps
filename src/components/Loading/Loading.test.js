import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Loading } from './index.jsx';

describe('<Loading />', () => {
    it('Should render with default values', () => {
        const { debug } = renderTheme(
            <Loading>Children</Loading>
        );
    });
});