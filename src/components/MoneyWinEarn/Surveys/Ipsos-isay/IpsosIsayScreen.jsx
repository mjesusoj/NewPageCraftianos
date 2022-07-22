import React from 'react';
import { Helmet } from 'react-helmet';

import { IpsosIsayArticle } from './IpsosIsayArticle';

export const IpsosIsayScreen = () => {
    const description = `Ipsos Isay es una comunidad de encuestas totalmente renumeradas, 
        por compartir nuestra opinión, ganamos dinero extra | Opiniones y Comprobantes 📙`
    const title = '🥇 i-Say - Gana REGALOS por realizar encuestas'

    const urlCanonical = 'https://craftianosmoney.com/ipsos-isay/'

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

            <div className="row justify-content-md-center">
                <IpsosIsayArticle />
            </div>
        </>
    )
}
