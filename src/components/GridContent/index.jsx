import P from 'prop-types';
import { Heading } from '../Headings';
import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';

export const GridContent = ({ title, metadata, content }) => {
  const { background } = metadata;

  // Função para converter o conteúdo em string HTML
  const convertContentToHtml = (content) => {
    return content.map(block => {
      if (block.type === 'paragraph') {
        return `${block.children.map(child => child.text).join('')}`;
      }
      return '';
    }).join('');
  };

  const html = convertContentToHtml(content);

  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading uppercase colordark={!background} as="h2"> 
          {title}
        </Heading>
        <Styled.Html
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  metadata: P.shape({
    background: P.bool
  }).isRequired,
  content: P.arrayOf(P.shape({
    type: P.string.isRequired,
    children: P.arrayOf(P.shape({
      text: P.string.isRequired
    })).isRequired
  })).isRequired
};
