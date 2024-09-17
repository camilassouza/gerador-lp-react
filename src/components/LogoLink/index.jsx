import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Headings';

export const LogoLink = ({ logo_text, logo }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={'link'}>
       {logo.data ? <img src={`http://localhost:1337${logo.data.attributes.url}`} /> : logo_text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};