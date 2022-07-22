import React from 'react';
import { Helmet } from 'react-helmet';

import { PrizeRebelArticle } from './PrizeRebelArticle';

export const PrizeRebelScreen = () => {
    const description = `Conoce la página de encuestas PrizeRebel  | Multitud de premios | Opiniones 2021 | 
        ¿PrizeRebel PAGA o es SCAM? | Entra aquí para ver más 👋🔵`
    const title = '🥇 PrizeRebel: Multitud de encuestas renumeradas y de premios'

    const urlCanonical = 'https://craftianosmoney.com/prize-rebel/'

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
                <PrizeRebelArticle />
            </div>
        </>
    )
}
