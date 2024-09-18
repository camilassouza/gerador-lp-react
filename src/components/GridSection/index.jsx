import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Headings';
import { TextComponent } from '../TextComponent';

export const GridSection = ({ title, description, text_grid }) => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading size="huge" as="h2">{title}</Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>{text_grid.map(el => (
          <Styled.GridElement key={el.title}>
            <Heading size="medium" as="h3">{el.title}</Heading>
            <TextComponent>{el.description}</TextComponent>
          </Styled.GridElement>
        ))}</Styled.Grid>

      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({
    title: P.string.isRequired,
    description: P.string.isRequired,
  })).isRequired

};