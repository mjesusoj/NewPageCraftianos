import React from 'react';
import { Helmet } from 'react-helmet';

import { HoneyGainArticle } from './HoneyGainArticle';

export const HoneyGainScreen = () => {
    const description = `Descubre la forma de ganar dinero sin hacer nada, sin invertir
        | Truco para ganar más dinero 💸 | Retira tu dinero en 20$ por PayPal y Bitcoin | Empieza ahora 👋`
    const title = '🐝 HoneyGain: ¿Cuál es el funcionamiento? | Ingresos Pasivos'

    const urlCanonical = 'https://craftianosmoney.com/honeygain'

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
                <HoneyGainArticle />
            </div>
        </>
    )
}
