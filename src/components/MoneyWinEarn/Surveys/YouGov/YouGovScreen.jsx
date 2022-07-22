import React from 'react';
import { Helmet } from 'react-helmet';

import { YouGovArticle } from './YouGovArticle';

export const YouGovScreen = () => {
    const description = `YouGov es una de las mejores páginas de encuestas, está disponible para todo el mundo. 
        Resolver encuestas por cupones regalo ⚡ | Ventajas de usar YouGov 💡`
    const title = '🥇 YouGov: Las mejores encuestas y gana cupones para Amazon'

    const urlCanonical = 'https://craftianosmoney.com/yougov/'

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
                <YouGovArticle />
            </div>
        </>
    )
}
