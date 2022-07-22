import React from 'react';
import { Helmet } from 'react-helmet';

import { PromosArticle } from './PromosArticle';

export const PromosScreen = () => {

    const description = `Descubre como ganar dinero con los tickets de supermercado y 
        así ahorrar dinero 💸 | Opiniones Promos App y comprobantes 💡 | Craftianosmoney`
    const title = 'Promos App: Recibe dinero por comprar en supermercados 🛒'

    const urlCanonical = 'https://craftianosmoney.com/promos-app/'

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
                <PromosArticle />
            </div>
        </>
    )
}
