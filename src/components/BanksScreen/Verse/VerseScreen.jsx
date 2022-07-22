import React from 'react';
import { Helmet } from 'react-helmet';

import { VerseArticle } from './VerseArticle';

export const VerseScreen = () => {
    const description = `Descubre la app para hacer pagos rápidos a amigos en 2021, 
    además de Unirse a concursos y Ganar Dinero | Usa mi code: BJNQ8R | Opiniones sobre Verse App 💙`
    const title = '🥇 Verse App: La mejor app de Pagos entre amigos | 5€ GRATIS AL UNIRTE'

    const urlCanonical = 'https://craftianosmoney.com/verse-app'

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
                <VerseArticle />
            </div>
        </>
    )
}
