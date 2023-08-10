import { Helmet } from 'react-helmet';
import { HomeArticle } from './HomeArticle';

import { trackEvent } from "@aptabase/web";
trackEvent("app_started"); 
trackEvent("page_view", { name: "Home Page", path: "/home" });

export const HomeScreen = () => {
    const description = `Descubre la forma de generar DINERO realizando múltiples tareas, 
        con cashback, encuestas, promos y mucho MÁS | ¿Te unes? 👋`
    const title = '🚀 Gana dinero desde casa en 2022 | Diferentes OPCIONES 🎁'

    const urlCanonical = 'https://craftianosmoney-page.vercel.app/'

    return (
        <>
            <Helmet>
                <link rel="canonical" href={ urlCanonical } />
                <meta name='twitter:image' content='https://craftianosmoney-page.vercel.app/img/craftianosmoney.webp' />
                <meta name="description" content={ description } />
                <meta name="twitter:card" content='summary_large_image' />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:title" content={ title } />
                <meta property='og:description' content={ description } />
                <meta property='og:image' content='https://craftianosmoney-page.vercel.app/img/craftianosmoney.webp' />
                <meta property='og:site_name' content={ title } />
                <meta property='og:title' content={ title } />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={ urlCanonical } />
                <title>{ title }</title>
            </Helmet>

            <main className="row justify-content-center">
                <HomeArticle />
            </main>
        </>
    )
}
