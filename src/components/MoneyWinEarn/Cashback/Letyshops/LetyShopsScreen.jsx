import React from 'react';
import { Helmet } from 'react-helmet';

import { LetyShopsArticle } from './LetyShopsArticle';

export const LetyShopsScreen = () => {
    const description = `Gana cashback en todos los PAISES 🥳 | Más 3.800 tiendas disponibles para comprar | 
        OPINIONES sobre LetyShops ⚡ | ¿Es FIABLE? 🤔`
    const title = '🥇 LetyShops: La mejor plataforma para ganar cashback 💸'

    const urlCanonical = 'https://craftianosmoney.com/letyshops/'

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
                <LetyShopsArticle />
            </div>
        </>
    )
}
