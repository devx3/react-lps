import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Base } from '../Base';
import { mapData } from '../../api/map';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../../components/Loading';
import GridTwoColumns from '../../components/GridTwoColumns';
import GridText from '../../components/GridText';
import GridContent from '../../components/GridContent';
import GridImage from '../../components/GridImage';
import config from '../../config';

export const Home = () => {
    const [data, setData] = useState([]);
    const location = useLocation();

    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetch(`${config.url}/pages/?slug=${slug}`);
                const json = await data.json();
                const pageData = mapData(json);
                setData(pageData[0]);
            } catch (error) {
                setData(undefined);
            }
        };
        load();
    }, [location, slug]);

    useEffect(() => {
        if (data === undefined) {
            document.title = 'Not found';
        }

        if (data && !data.slug) {
            document.title = 'Carregando...';
        }

        if (data && data.title) {
            document.title = data.title;
        }
    }, [data]);

    if (data === undefined) {
        return <PageNotFound />;
    }

    if (data && !data.slug) {
        return <Loading />;
    }

    const { menu, sections, footerHtml } = data;
    const { links, text, link, srcImg } = menu;
    return (
        <Base
            links={links}
            footerHtml={footerHtml}
            logoData={{ text, link, srcImg }}
        >
            {sections.map((section, index) => {
                const { component } = section;
                const key = `${data.slug}-${index}`;

                switch (component) {
                    case 'section.section-two-columns':
                        return <GridTwoColumns key={key} {...section} />;

                    case 'section.section-content':
                        return <GridContent key={key} {...section} />;

                    case 'section.section-grid-text':
                        return <GridText key={key} {...section} />;

                    case 'section.section-grid-image':
                        return <GridImage key={key} {...section} />;

                    default:
                        break;
                }
            })}
        </Base>
    );
};
