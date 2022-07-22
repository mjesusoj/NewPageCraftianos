import React from 'react';
import { Helmet } from 'react-helmet';

import { SmartmeArticle } from './SmartmeArticle';

export const SmartmeScreen = () => {
    const description = `Con smartme app podemos ganar dinero 💰 por usar el móvil, 
        realizar encuestas cortas de menos de 5min y ahorrar con el club smartme`
    const title = 'Smartme-app: Recibe dinero por usar el móvil y realizar encuestas'

    const urlCanonical = 'https://craftianosmoney.com/smartme-app/'

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
                <SmartmeArticle />
            </div>
        </>
    )
}
