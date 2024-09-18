import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Headings';

export const GridImage = ({ title, image, background = false }) => {
    return (
    <SectionBackground background={background}>
        <Styled.Container>
          <Heading size="huge" uppercase colordark={!background} as="h2">
            {title}
          </Heading>
          <Styled.Grid>
            {image.data.map((el) => (
              <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
                <Styled.Image src={`http://localhost:1337${el.attributes.url}`} alt={el.attributes.altText} />
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