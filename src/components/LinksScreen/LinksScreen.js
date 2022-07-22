import React from 'react';
import { Helmet } from 'react-helmet';

import { LinksArticle } from './LinksArticle';

export const LinksScreen = () => {
    const description = `Aquí puedes encontrar todos los enlaces a plataformas de cashback,
        pagos, encuestas, bancos móviles y mucho más 💡 | Ingresos Extras 💸 | CraftianosMoney`
    const title = 'Enlaces - Creador de contenido en RRSS @craftianosmoney 💸'

    const urlCanonical = 'https://craftianosmoney.com/enlaces/'

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

            <div className="row justify-content-end">
                <LinksArticle />
            </div>
        </>
    )
}
