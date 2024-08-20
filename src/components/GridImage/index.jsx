import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Headings';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ title, description, grid, background = false }) => {
    return (
    <SectionBackground background={background}>
        <Styled.Container>
          <Heading size="huge" uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{description}</TextComponent>
          <Styled.Grid>
            {grid.map((el) => (
              <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
                <Styled.Image src={el.srcImg} alt={el.altText} />
              </Styled.GridElement>
            ))}
          </Styled.Grid>
        </Styled.Container>
      </SectionBackground>
    );
}; 

GridImage.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            altText: P.string.isRequired,
            srcImage: P.string.isRequired,
        })
    ).isRequired,
    background: P.bool
};