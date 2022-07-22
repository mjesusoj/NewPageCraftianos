import React from 'react';
import { Helmet } from 'react-helmet';

import { BlogList } from '../BlogScreen/BlogList';

export const BlogScreen = () => {
    const description = `Últimas publicaciones sobre las aplicaciones de encuestas, 
        plataformas, páginas de cashback, bancos móviles y pagos. | Entra y ve todos mis posts 👏`
    const title = 'Últimas publicaciones 📗 | Craftianosmoney'

    const urlCanonical = 'https://craftianosmoney.com/blog/'

    return (
        <>
            <Helmet>
                <link rel="canonical" href={ urlCanonical } />
                <meta name='twitter:image' content='https://craftianosmoney.com/img/craftianosmoney.webp' />
                <meta name="description" content={ description } />
                <meta name="twitter:card" content='summary_large_image' />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:title" content={ title } />
                <meta property='og:description' content={ description } />
                <meta property='og:image' content='https://craftianosmoney.com/img/craftianosmoney.webp' />
                <meta property='og:site_name' content={ title } />
                <meta property='og:title' content={ title } />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={ urlCanonical } />
                <title>{ title }</title>
            </Helmet>

            <div className="row justify-content-end">
                <BlogList />    
            </div>
        </>
    )
}
