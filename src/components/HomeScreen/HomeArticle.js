import React from 'react';
import { NavLink } from 'react-router-dom';

export const HomeArticle = () => {
    return (
        <div className="col-12 col-sm-7 col-md-5 mt-2">
            <h1 className="h4 text-primary mb-2">👋 Bienvenidos a mi página 🤗</h1>
            <p className="text-justify text-article">
                En este blog podreís saber la forma de ganar dinero en 2022, ya sea por realizar encuestas, 
                recibir cashback por compras en tiendas online, además de recibir ingresos extras, 
                por utilizar aplicaciones de pago como Verse y bancos móviles 100% online referentes en Europa.
            </p>
            <hr />
            <div className="card cardHome">
                <img className="card-img-top rounded imgCraftianos" src="../img/craftianosmoney.webp"
                    title="Icono de Craftianos" alt="Imagen de Craftianos" loading="lazy"/>
                <div className="card-body">
                    <h2 className="h4 card-title fw-bold">Sobre mí ✨</h2>
                    <p className="card-text">
                        Soy un chico de Andalucía (España) y comencé a hacer esta página como hobby en el 2018,
                        como proyecto personal, porque además de publicar apps para ahorrar o ganar dinero,
                        soy Desarrollador Web 👨‍💻 y por lo cual esta página la hecho desde cero 🥰 <br /><br />
                        
                        Así que sin nada más que decir, te invito a que hagas un recorrido por aquí, porque publico muchas cosas 🥳
                        entre lo que destaco las páginas para realizar encuestas por dinero,
                        plataformas de cashback, plataformas de pago y MUCHO MÁS AQUÍ ABAJO 👇
                    </p>

                    {/* Link to Enlaces */}
                    <NavLink
                        className="nav-link btn btn-outline-success mb-4"
                        exact
                        to="/enlaces/"
                        title="Link a TODOS los enlaces de Encuestas, Plataformas de Cashback, etc"
                    >
                        Mira esto, puede que te interese 🎁
                    </NavLink>

                    Si no me conoces, puedes ir a la sección "sobre-mi" y seguirme en mis redes sociales, 
                    para enterarte de todo lo que publico 🤗
                </div>
            </div>
        </div>
    )
}