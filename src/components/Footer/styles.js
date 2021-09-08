import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.div`
    text-align: center;
    ${({ theme }) => css`
        border-top: 1px solid ${theme.colors.mediumGrey};
        a {
            text-decoration: none;
        }

        & ${TextComponent} p {
            font-size: ${theme.fonts.sizes.xsmall};
        }

        & ${SectionContainer} {
            padding-top: 0;
            padding-bottom: 0;
        }
    `};
`;
