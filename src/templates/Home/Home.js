import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base/index';
import { PageNotFound } from '../PageNotFound/index';
import { Loading } from '../Loading';
import { GridTwoColum } from '../../components/GridTwoColums';
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import { GridImage } from '../../components/GridImage';
import { GridText } from '../../components/GridText';
import { useLocation } from 'react-router-dom';
import config from '../../config';

function Home() {
  const [data, setData] = useState(null);
  const isMounted = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname?.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;
    

    const load = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/pages?slug=' + slug);
        const json = await response.json();

        if (!json.data || json.data.length === 0) {
          setData(undefined);
        } else {
          const { attributes } = json.data[0];
          setData(attributes);
        }
      } catch (error) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location.pathname]);

  useEffect(() => {}, [data])

  if (data === undefined) {
    document.title = `Pagina nao encontrada | ${config.siteName}`
    return <PageNotFound />;
  } else if (data === null) {

    document.title = `Carregando... |  ${config.siteName}`
    return <Loading />;
  } else {

    document.title = `${data.title} |  ${config.siteName}`

    const { menu, sections, footerHtml } = data;
    const { menu_links, logo, logo_text } = menu[0];

    return (
      <Base
        links={menu_links}
        footerHtml={footerHtml}
        logoData={{ logo, logo_text }}
      >
        {sections.map((section, index) => {
          const component = section.__component;

          if (component === 'section.section-two-colomns') {
            return <GridTwoColum key={index} {...section} />;
          }

          if (component === 'section.section-content') {
            return <GridContent key={index} {...section} />;
          }

          if (component === 'section.section-grid') {
            return <GridSection key={index} {...section} />;
          }

          if (component === 'section.section-text' || component === 'section.text-grid') {
            return <GridText key={index} {...section} />;
          }

          if (component === 'section.section-image' || component === 'section.image-grid') {
            return <GridImage key={index} {...section} />;
          }

          return undefined;
        })}
      </Base>
    );
  }
}


export default Home;
