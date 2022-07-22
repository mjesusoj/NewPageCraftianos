import React from 'react';
import { Helmet } from 'react-helmet';

import { PlayingArticle } from './PlayingArticle';

export const PlayingScreen = () => {
    const description = `Descubre las páginas y apps para GANAR dinero jugando 🤩🎮 | 
        OPINIONES sobre SwagBucks, MistPlay y Gamee 💡 | ¿Son FIABLES? ¿Pagan? 🤔 `
    const title = '🥇 Descubre la forma de GANAR dinero jugando 💡🎮'

    const urlCanonical = 'https://craftianosmoney.com/gana-dinero-jugando/'

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
                <PlayingArticle />
            </div>
        </>
    )
}
