import React from 'react';
import { Helmet } from 'react-helmet';

import { AttaPollArticle } from './AttaPollArticle';

export const AttaPollScreen = () => {
    const description = `Conoce la app de encuestas AttaPoll | Empieza a ganar dinero desde ya 🔥💸 | 
        Gana dinero en diferentes plataformas | ¿Es Fiable? 💡`
    const title = '🥇 AttaPoll: Dinero por encuestas'

    const urlCanonical = 'https://craftianosmoney.com/attapoll/'

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
                <AttaPollArticle />
            </div>
        </>
    )
}
