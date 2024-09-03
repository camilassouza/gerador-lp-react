import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  const transformedLinks = links.map(link => ({
    id: link.id,
    children: link.link_text,
    link: link.url, 
    newTab: link.open_new_tab, 
  }));

  return (
    <Styled.Container>
      {transformedLinks.map((link) => (
        <MenuLink key={link.id} {...link} />
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      link_text: P.string.isRequired,
      url: P.string.isRequired,
      open_new_tab: P.bool,
    }),
  ),
};
