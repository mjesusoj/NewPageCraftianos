import React from 'react';
import { Helmet } from 'react-helmet';

import { PollPayArticle } from './PollPayArticle';

export const PollPayScreen = () => {
    const description = `¿Qué es PollPay y porqué se puede ganar dinero con ella? | Opiniones sobre PollPay 2021 |
        ¿Es Fiable o SCAM? | Mira más información aquí 👋 | Dinero extra 💡`
    const title = '🥇 PollPay: Gana MÁS DINERO con NUEVA ACTUALIZACIÓN'

    const urlCanonical = 'https://craftianosmoney.com/pollpay/'

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
                <PollPayArticle />
            </div>
        </>
    )
}
