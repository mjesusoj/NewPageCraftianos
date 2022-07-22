import React from 'react';
import { Helmet } from 'react-helmet';

import { CashbackArticle } from './CashbackArticle';

export const CashbackScreen = () => {
    const description = `🤔 ¿Se puede ganar dinero comprando por Internet?, 
        con plataformas como LetyShops, Igraal, Widilo 💸 | ¿Cómo funcionan? ¿Son Fiables? 🤯`
    const title = '🥇 Las mejores plataformas de cashback para GANAR dinero 💸'

    const urlCanonical = 'https://craftianosmoney.com/compras-cashback/'

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
                <CashbackArticle />
            </div>
        </>
    )
}
