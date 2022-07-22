import React from 'react';
import { Helmet } from 'react-helmet';
import { HomeArticle } from './HomeArticle';

export const HomeScreen = () => {
    const description = `Descubre la forma de generar DINERO realizando múltiples tareas, 
        con cashback, encuestas, promos y mucho MÁS | ¿Te unes? 👋`
    const title = '🚀 Gana dinero desde casa en 2022 | Diferentes OPCIONES 🎁'

    const urlCanonical = 'https://craftianosmoney.com/'

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

            <div className="row justify-content-center article">
                <HomeArticle />
            </div>
        </>
    )
}
