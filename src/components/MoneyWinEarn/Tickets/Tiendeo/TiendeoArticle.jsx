import React from 'react';

export const TiendeoArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">Tiendeo 🎁 - Recibe cashback por tickets de supermercado</h1>
                <h2 className="h4 text-primary mb-4">Gana dinero comprando tus productos favoritos 💖</h2>
                <p className="text-justify enlaces">
                    Tiendeo es una página web, en la que podemos encontrar los catálogos de los establecimientos 
                    cerca de nuestro domicilio, descuentos y cashback. <br/>
                    Esta cuenta con una app para subir los tickets de compra de cualquier supermercado y 
                    así recibir cashback de algunos productos que hemos comprado. <br /><br />
                    Tiendeo pertenece a la empresa "Tiendeo Web Marketing S.L", cuya domicilio social está en Barcelona (España). <br/><br/>
                    Podeís ver toda la información sobre Tiendeo, además de los Términos y Condiciones aquí 👇
                    <a className="" href="https://www.tiendeo.com/info/legal-notice/#es" target="_blank" rel="noopener noreferrer"> 
                        https://www.tiendeo.com/info/legal-notice/#es
                    </a>
                </p>
            
                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#registro-tiendeo" className="list-group-item list-group-item-action list-group-item-dark">
                            1. ✅ ¿Cómo registrarse en Tiendeo? | Formas de Registro
                        </a>
                        <a href="#funcionamiento-tiendeo" className="list-group-item list-group-item-action list-group-item-dark">
                            2. ✅ ¿Cómo se hace para recibir el cashback?
                        </a>
                        <a href="#retiro-tiendeo" className="list-group-item list-group-item-action list-group-item-dark">
                            3. ✅ ¿Qué hay que hacer para retirar?
                        </a>
                        <a href="#comprobante-tiendeo" className="list-group-item list-group-item-action list-group-item-dark">
                            4. ✅ Comprobantes de Pagos | ¿Es FIABLE Tiendeo?
                        </a>
                    </div>
                </div>

                <div id="registro-tiendeo">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo registrarse en Tiendeo? | Formas de Registro</h3>
                    <p className="text-justify">
                        Hay dos opciones en las que registrase en Tiendeo 👇
                        <ol>
                            <li>
                                🥇 Registrarse con una cuenta de Google (La que recomiendo encarecidamente)
                            </li>
                            <li>
                                🥈 Registrarse con una cuenta de Facebook (No la recomiendo en absoluto vaya ⛔)
                                
                            </li>
                        </ol>
                    </p>
                    <div className="d-grid gap-2">
                        <a className="btn btn-outline-success btn-block mb-4" href="https://bit.ly/tiendeoCR" target="_blank" rel="noopener noreferrer">
                            Únete desde aquí a Tiendeo y empiza a ahorrar en tus compras del supermercado 🤗🤩
                        </a>
                    </div>
                    <p className="text-justify">
                        Al acceder a la página de tiendeo, pulsaís en "Cómo funciona el cashback",
                        en el banner de arriba.
                        Así podreís ver como funciona el cashback en tiendeo, al terminar la ayuda, 
                        nos aparece el recuadro de registrarnos. <br/><br/>
                        Nos registramos con nuestra cuenta de Google y así no hay que poner contraseña ✅
                    </p>
                    <div className="alert alert-warning">
                        RECOMENDACION: Subir el primer ticket desde la Página Web y más tarde 
                        descargar desde la Play Store / App Store 
                    </div>
                </div>

                <div id="funcionamiento-tiendeo">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo se hace para recibir el cashback?</h3>
                    <p className="text-justify">
                        Para subir los tickets, antes hay que seleccionar los productos que hemos comprado, así como su cantidad 
                        (si lo permite), al hacer esto, pulsamos sobre "Subir ticket" y hacemos una foto al ticket completo. 
                        (Si es muy largo, se pueden hechar varias fotos). <br /><br />

                        <b>IMPORTANTE</b>:  Como os habeís registrado por primera vez y estáis subiendo vuestro primer ticket, 
                        <b>podeís seleccionar la promo de 0.50€, así ganaís 1,50€ por registraros, además del que habeís solicitado
                        con vuestro primer ticket.</b> <br /><br />

                        Ahora ya solo hace falta esperar a que nos validen el ticket y 
                        recibamos en nuestro saldo lo que hemos solicitado. <br /><br />

                        <b>* A partir de esto, ya podeís descargar la app e iniciar con vuestra cuenta de Google.</b>
                    </p>
                </div>

                <div id="retiro-tiendeo">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Qué hay que hacer para retirar?</h3>
                        <p className="text-justify">
                            Para recibir el cashback que tenemos acumulado en el saldo de nuestra cuenta, 
                            nos dirigimos al inicio y pulsamos en saldo, en el botón de arriba, al entrar pulsamos en "reembolsar ahora", 
                            y podremos ver las opciones que tenemos para retirar nuestro saldo, os dejo por aquí las que hay actualmente 👇
                    </p>
                    {/* //* Change images jeje */}
                    <div id="carousel" className="carousel slide mt-4 mb-4" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img loading="lazy" className="rounded mx-auto d-block w-50" src="../img/tiendeo/metodo_pago.png" 
                                    alt="Métodos de Pago disponibles en Tiendeo" title="Métodos de Pago disponibles en Tiendeo"/>
                            </div>
                            <div className="carousel-item">
                                <img loading="lazy" className="rounded mx-auto d-block w-50" src="../img/tiendeo/metodo_pago2.png" 
                                    alt="Métodos de Pago disponibles en Tiendeo" title="Métodos de Pago disponibles en Tiendeo"/>
                            </div>
                            <div className="carousel-item">
                                <img loading="lazy" className="rounded mx-auto d-block w-50" src="../img/tiendeo/metodo_pago3.png" 
                                    alt="Métodos de Pago disponibles en Tiendeo" title="Métodos de Pago disponibles en Tiendeo"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="comprobante-tiendeo">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Comprobantes de Pagos | ¿Es FIABLE Tiendeo?</h3>
                    <p class="text-justify">
                        En tiendeo como podeís haber visto antes tenemos muchas opciones para retirar el cashback acumulado,
                        pues en mi caso lo he retirado en Verse y como era la primera vez, te suman 2€. <br/>
                        Tenía acumulado 7,50€ y me han pagado 9,50€, lo podeís mirar aquí 👇
                    </p>
                    <img loading="lazy" src="../img/tiendeo/pago_realizado.png" class="rounded mx-auto d-block w-50 mb-4" 
                        alt="Comprobante de Pago de Tiendeo" title="Comprobante de Pago de Tiendeo"/>
                    <div class="alert alert-info enlaces">
                        ¿Qué todavía no usas Verse para pagar a todos tus amigos y ganar dinero? 💡💸
                        <br /><br />
                        Usa este enlace para descargar la app y registrarte:
                        <a href="https://bit.ly/VerseCR" target="_blank" rel="noopener noreferrer"> https://bit.ly/VerseCR</a>
                    </div>
                </div>

            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="h5 text-danger">⚡ Otras apps para ganar con tickets ⚡</h3>
                        <p className="text-justify ">
                            Aquí os dejo un listado de otras plataformas de cashback que he probado y que recomiendo ✅
                        </p>
                        <ul className="enlaces">
                            <li className="">
                                <a href="/promos-app">
                                    🥇 PromosApp: Usa mi código: ULXIXW para ganar tus primeros € 🤩
                                </a>
                            </li>
                            <li className="">
                                <a href="https://bit.ly/geltTicketsCR" target="_blank" rel="noreferrer">
                                    🥈 Gelt: Una de las que más gusta al mundo, únete y gana muuuchoo dinero 💖
                                </a>
                            </li>
                            <li className="">
                                <a href="https://cutt.ly/berubycashCR" target="_blank" rel="noreferrer">
                                    🥉 Shoppix: Cualquier ticket y no hay enlace de afiliados (por ahora)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}