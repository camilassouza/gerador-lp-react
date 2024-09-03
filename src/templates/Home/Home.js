import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';
import { mockBase } from '../Base/stories';
import { Base } from '../Base/index';
import { PageNotFound } from '../PageNotFound/index';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/api/pages?populate=deep')
        
        const json = await data.json();
        console.log(json)
        const { attributes } = json.data[1];
        setData(() => attributes);
      } catch {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if(data && !data.slug) {
    return <Loading />
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }
  const { menu, sections, footerHtml } = data;
  const { menu_links, text, link, srcImg } = menu[0];
  console.log('data', data);
  console.log('links here', menu_links)
  
  return <Base
    links={menu_links}
    footerHtml={footerHtml}
    logoData={{ text, link, srcImg }}
  >
    <h1>ola mundo</h1>
    <h1>ola mundo</h1>
    <h1>ola mundo</h1>
  </Base>

  // return <Base {...mockBase} />;
}

export default Home;