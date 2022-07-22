import React from 'react';
import { Helmet } from 'react-helmet';

import { IgraalArticle } from './IgraalArticle';

export const IgraalScreen = () => {
    const description = `Descubre la nueva plataforma Igraal que ha salido en Europa hace poco,
        conoce sus diferencias con otras | Recibe 4€ al Unirte 🥳 | Craftianosmoney`
    const title = '🥇 iGraal: Nueva Plataforma de cashback | España 2021 ✅'

    const urlCanonical = 'https://craftianosmoney.com/igraal/'

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
                <IgraalArticle />
            </div>
        </>
    )
}
