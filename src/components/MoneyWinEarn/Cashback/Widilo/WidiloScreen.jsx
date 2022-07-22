import React from 'react';
import { Helmet } from 'react-helmet';

import { WidiloArticle } from './WidiloArticle';

export const WidiloScreen = () => {
    const description = `Widilo es otra de las mejores plataformas de cashback | Opiniones sobre Widilo 2021 | 
        Recibe cashback sin compras con Widilove 🧡 | Gana 5€ ABRIENDO CUENTA 🤯`
    const title = '🥉 Widilo: Compras en tiendas online y recibe cashback 💸'

    const urlCanonical = 'https://craftianosmoney.com/widilo/'

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
                <WidiloArticle />
            </div>
        </>
    )
}
