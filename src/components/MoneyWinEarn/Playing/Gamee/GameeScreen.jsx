import React from 'react';
import { Helmet } from 'react-helmet';

import { GameeArticle } from './GameeArticle';

export const GameeScreen = () => {
    const description = `Con Gamee podrás jugar a juegos y a la vez ganar dólares GRATIS 🤑 |
        Aquí podrás ver el funcionamiento, además de poder ganar más dinero con trucos ✅ | ¿Es Fiable?`
    const title = '🥇 Gamee: Gana Dinero Jugando a Juegos GRATIS ✅'

    const urlCanonical = 'https://craftianosmoney.com/gamee/'

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
                <GameeArticle />
            </div>
        </>
    )
}
