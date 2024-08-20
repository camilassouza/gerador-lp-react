import { Heading } from '../../components/Headings';
import { Base } from '../Base';
import { mockBase } from '../Base/stories';
import * as Styled from './styles'

function Home() {
  return (
    <div className="Home">
      <Base {...mockBase}></Base>
    </div>
  );
}

export default Home;
