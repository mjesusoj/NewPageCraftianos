import React from 'react';
import { Helmet } from 'react-helmet';

import { MarketAgentArticle } from './MarketAgentArticle';

export const MarketAgentScreen = () => {
    const description = `MarketAgent es una plataforma de encuestas, 
        la cual nos da dinero por compartir nuestra opinión, | OPINIONES sobre MarketAgent ⚡ | ¿Es Fiable? 🧐`
    const title = '🥉 MarketAgent: Plataforma de Encuestas | Encuestas Pagadas 💸'

    const urlCanonical = 'https://craftianosmoney.com/marketagent/'

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
                <MarketAgentArticle />
            </div>
        </>
    )
}
