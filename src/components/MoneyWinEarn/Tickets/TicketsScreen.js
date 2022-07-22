import React from 'react';
import { Helmet } from 'react-helmet';

import { TicketsArticle } from './TicketsArticle';

export const TicketsScreen = () => {
    const description = `👋 Aquí encontrarás apps para ganar dinero escaneando tickets, 
        o más bien, ahorrar por hacer la compra en tu supermercado favorito | Entra y verás 🤗`
    const title = '🥇 Descubre COMO Ganar Dinero con Tickets de Compra 💸'

    const urlCanonical = 'https://craftianosmoney.com/apps-dinero-tickets/'

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
                <TicketsArticle />
            </div>
        </>
    )
}
