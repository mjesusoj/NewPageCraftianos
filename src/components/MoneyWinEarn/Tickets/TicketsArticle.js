import React from 'react';
import { Link } from 'react-router-dom';

export const TicketsArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">💸 Apps para ahorrar con tickets 💡</h1>
                <h2 className="h4 text-primary mb-4">👑 Recibe dinero por tickets de supermercado ✅</h2>
                <p className="text-justify">
                    En esta sección os enseño como ganar dinero o ahorrar por hacer la compra en cualquier supermercado 🥰,
                    además de dar mi opinión sobre las apps, que permiten esto 🤗
                </p>
                <div className="card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title">✅ Promos App: Cupones válidos en cualquier supermercado</h3>
                        <p className="text-justify">
                            Promos es una app con la que podemos ganar dinero por comprar en cualquier supermercado.
                            Es una de las mejores porque hay mucha variedad de promociones y es muy intuitiva 🥰
                        </p>
                        <Link
                            className="btn btn-outline-success d-grid mb-4"
                            exact
                            to="/promos-app/" 
                            title="Mira más información de Promos">
                                Mira más información de Promos 👏 | Y gana dinero con tus tickets del supermercado 🚀
                        </Link>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title">✅ Tiendeo: Catálogo de supermercados, cashback y mucho MÁS</h3>
                        <p className="text-justify">
                            Tiendeo es una app con la que podemos ver el catálogo de los supermercados, 
                            subir tickets de la compra y ganar dinero con ellos, entre otras cosas. <br /><br />

                            Solo por registrarse puedes ganar 1€ GRATIS + 0.50€ por subir el primer ticket. <br /><br />

                            ¿Quieres recibir cashback por tus compras en tiendeo? <br />
                            Pulsa abajo para ver más información y registrarte 👇
                        </p>
                        <Link 
                            className="btn btn-outline-success d-grid mb-4"
                            exact
                            to="/tiendeo/" 
                            title="Mira más información de Tiendeo">
                                Mira más información de Tiendeo 👏 | Y gana tus primeros euros con tus tickets 💫
                        </Link>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title">✅ Gelt: Muchas promociones y mucho más 🚀</h3>
                        <p className="text-justify">
                            Tiendeo es una app con la que podemos ver el catálogo de los supermercados, 
                            subir tickets de la compra y ganar dinero con ellos, entre otras cosas. <br /><br />

                            Solo por registrarse puedes ganar 1€ GRATIS + 0.50€ por subir el primer ticket. <br /><br />

                            ¿Quieres recibir cashback por tus compras en tiendeo? <br />
                            Pulsa abajo para ver más información y registrarte 👇
                        </p>
                        <a className="btn btn-outline-success d-grid" href="https://cutt.ly/geltTicketsCR" target="_blank" rel="noreferrer" 
                            title="Regístrate en Gelt y Gana Dinero Con Tus Tickets">
                                Muchísimas promociones en las que ganar MUCHO dinero 🤯💎
                        </a>
                    </div>
                </div>
            </div>
            <div className="col col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="h5 card-title">¿Cómo ahorrar con los tickets de compra?</h2>
                        <p className="text-justify">
                            En esta sección dejo algunas apps con las que subir los tickets del supermercado y ahorrar dinero.
                            Es muy fácil, solo hace descargarse alguna app, registrarse, elegir los productos que hemos comprado. 
                            <br /><br />
                            (En todas las apps, se actualizan los productos cada semana)
                        </p>
                        <div className="alert alert-info">
                            MUY PRONTO ACTUALIZO ESTA SECCIÓN Y AÑADO MÁS APPS CON LAS QUE GANAR DINERO CON TICKETS 🚀🎉
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}