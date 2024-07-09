import { Heading } from '../../components/Headings';
import * as Styled from './styles'

function Home() {
  return (
    <div className="Home">
      <Styled.Wrapper background="blue">
        <Heading>texto</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
