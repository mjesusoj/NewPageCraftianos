import React from 'react';
import { Helmet } from 'react-helmet';

import { NothingArticle } from './NothingArticle';

export const NothingScreen = () => {
    const description = `🤠 ¿Cómo puedes ganar dinero sin hacer nada? Aquí puedes ver algunas apps 
        con las que podrás hacer TODO esto y MUCHO MÁS 🌟 | Conseguir Ingresos Pasivos en 2021 👏`
    const title = '🏅 Gana Dinero Sin Hacer NADA | Ingresos Pasivos 🚀'

    const urlCanonical = 'https://craftianosmoney.com/gana-dinero-sin-hacer-nada/'

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
                <meta property='og:site_name' content='Redes Sociales de @craftianosmoney' />
                <meta property='og:title' content={ title } />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={ urlCanonical } />
                <title>{ title }</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <NothingArticle />
            </div>
        </>
    )
}
