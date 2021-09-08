import * as Styled from './styles.js';
import P from 'prop-types';
import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImg = '', link }) => {
    return (
        <Heading size="big" uppercase darkMode={false}>
            <Styled.Container href={link}>
                {!!srcImg && <img src={srcImg} alt={text} />}
                {!srcImg && <span>{text}</span>}
            </Styled.Container>
        </Heading>
    );
};

LogoLink.propTypes = {
    text: P.string.isRequired,
    srcImg: P.string,
    link: P.string.isRequired,
};
