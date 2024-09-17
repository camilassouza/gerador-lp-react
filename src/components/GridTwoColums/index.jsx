import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Headings';
import { TextComponent } from '../TextComponent';

export const GridTwoColum = ({ title, description, image, metadata }) => {
  const { background } = metadata;
  const imageFormated = image.data[0].attributes.url;
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase as="h2">{title}</Heading>
          <TextComponent>{description}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={'http://localhost:1337' + imageFormated} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColum.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  image: P.string.isRequired,
  background: P.bool,
};