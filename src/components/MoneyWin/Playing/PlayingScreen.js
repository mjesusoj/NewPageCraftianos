import React from 'react';
import { Helmet } from 'react-helmet';

import { PlayingArticle } from './PlayingArticle';

export const PlayingScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="🤯 ¿Sabes que puedes ganar dinero haciendo compras online? |
                    Con algunas plataformas de cashback es posible 💰 | Entra aquí a ver más información ✅" />
                <title>🥇 Plataformas de cashback</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <PlayingArticle />
            </div>
        </>
    )
}
