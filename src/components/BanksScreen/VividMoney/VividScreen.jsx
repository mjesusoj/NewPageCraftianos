import React from 'react';
import { Helmet } from 'react-helmet';

import { VividArticle } from './VividArticle';

export const VividScreen = () => {
    const description = `Descubre el mejor banco online y sus SUPER VENTAJAS 💜 | 
        El banco que devuelve dinero por COMPRAR ONLINE, Supermercados y MUCHO MÁS AQUÍ 👋`
    const title = '🥇 El neobanco que devuelve DINERO 💸 | Vivid Money 💜'

    const urlCanonical = 'https://craftianosmoney.com/vivid-money/'

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
                <VividArticle />
            </div>
        </>
    )
}
