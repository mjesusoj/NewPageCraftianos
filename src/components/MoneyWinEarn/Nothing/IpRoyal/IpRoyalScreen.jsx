import React from 'react';
import { Helmet } from 'react-helmet';

import { IpRoyalArticle } from './IpRoyalArticle';

export const IpRoyalScreen = () => {
    const description = `🤠 ¿Quieres ganar dinero de forma pasiva? Entra aquí y mira como lo puedes hacer | 
        Comparte Internet y Gana Dinero | Opiniones sobre IPRoyal | ¿Realmente PAGA? 🤔`
    const title = '🥇 IPRoyal Panws: Comparte Internet y Gana Dinero desde 5$ 🎉'

    const urlCanonical = 'https://craftianosmoney.com/iproyal/'

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
                <IpRoyalArticle />
            </div>
        </>
    )
}
