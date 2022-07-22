import React from 'react';

import { Helmet } from 'react-helmet';

import { BanksArticle } from './BanksArticle';

export const BanksScreen = () => {
    const description = `✅ Descubre los mejores bancos online sin comisiones ❌ 
        y las ventajas frente a los tradicionales | 💥 Opiniones Vivid Money, N26, Rebellion y Verse App`
    const title = '🥇 Los mejores bancos online y pagos móviles 📲💳'

    const urlCanonical = 'https://craftianosmoney.com/banco-movil-pagos/'

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
                <BanksArticle />
            </div>
        </>
    )
}
