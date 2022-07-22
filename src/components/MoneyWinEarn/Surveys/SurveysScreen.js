import React from 'react';
import { Helmet } from 'react-helmet';

import { SurveysArticle } from './SurveysArticle';

export const SurveysScreen = () => {
    const description = `✅ Descubre las plataformas que nos recompensan por realizar encuestas renumeradas, 
        aplicaciones multiplataforma para GANAR dinero en PayPal, Amazon y mucho más AQUI 👋`
    const title = '🥇 Gana Dinero Realizando Encuestas en 2021 | Páginas y Apps'

    const urlCanonical = 'https://craftianosmoney.com/encuestas-renumeradas/'

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
                <SurveysArticle />
            </div>
        </>
    )
}
