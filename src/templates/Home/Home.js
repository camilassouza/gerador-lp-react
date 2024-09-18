import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base/index';
import { PageNotFound } from '../PageNotFound/index';
import { Loading } from '../Loading';
import { GridTwoColum } from '../../components/GridTwoColums';
import { GridContent } from '../../components/GridContent';
 import { GridSection } from '../../components/GridSection';
import { GridImage } from '../../components/GridImage';
import { GridText } from '../../components/GridText';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/api/pages?populate=deep')
        
        const json = await data.json();
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
  const { menu_links, logo, logo_text } = menu[0];
  
  return <Base
    links={menu_links}
    footerHtml={footerHtml}
    logoData={{ logo, logo_text }}
  >
      {sections.map((section, index) => {
        const component = section.__component;
        console.log(section)

        if(component === 'section.section-two-colomns') {
          return <GridTwoColum key={index} {...section}></GridTwoColum>
        }

        if(component === 'section.section-content') {
          return <GridContent key={index} {...section}></GridContent>
        }
        
        if(component === 'section.section-grid') {
          return <GridSection key={index} {...section}></GridSection>
        }
        
        if(component === 'section.section-text' || component === 'section.text-grid')  {
          return <GridText key={index} {...section}></GridText>
        }
        
        if(component === 'section.section-image' || component === 'section.image-grid' ) {
           return <GridImage key={index} {...section}></GridImage>
        }
      } )}
  </Base>
}

export default Home;