import React from 'react';
import { Link } from 'react-router-dom';

export const VividArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">Vivid Money 💜 - El banco que devuelve dinero 🥰</h1>
                <h2 className="h4 text-primary mb-4">Únete y gana 10€ de registro y mucho cashback 🤯</h2>
                <p className="text-justify">
                    Vivid Money es un neobanco alemán al igual que N26, tiene muchas ventajas frente a este y otros,
                    porque ofrece 3 meses de PREMIUM al momento de abrir una cuenta ⚡ y un mes para disfrutar del cashback Prime,
                    cashback en Netflix, Disney + y mucho más 🤗 <br /><br />
                    (En esos 3 meses, se pueden aprovechar las SUPER VENTAJAS 🔥, lo que consiste en que nos devuelven más dinero, por
                    comprar en diferentes comercios).
                </p>

                <a className="btn btn-outline-warning mb-4" href="https://bit.ly/vividCR" target="_blank" rel="noopener noreferrer">
                    Abre una cuenta y aprovecha los meses de PREMIUM 🏅
                </a>

                <p className="text-justify">
                    Ejemplo: Hace tiempo sacaron una oferta de pagar en Carrefour y obtener un 13% de cashback, por lo que si se hace una compra de 50€, 
                    nos dan 6,5€ de cashback, que van a un espacio de acciones (podemos escoger cualquier compañía en la que recibir acciones 
                    y a partir del cashback que tengamos disponibles en ese espacio, podemos ganar más dinero, NO MENOS 💡)
                </p>

                <div className="alert alert-danger" role="alert">
                    Aclaro una duda, los 3 meses de PREMIUM es para las ventajas de cashback (Netflix, Spotify, etc), 
                    no de las SUPER ventajas (Las cuales actualizan todos los meses, ahora mismo está disponible para Lidl, Carrefour, etc).
                </div>

                <h3 className="h5 text-primary mb-4">🔥 SUPERVENTAJAS en Vivid Money 💜</h3>
                <p className="text-justify">
                    Las ventajas por las que usted puede obtener al registrarse a través de mi enlace de referido son: 🥳
                </p>
                <ul className="list-custom">
                    <li>
                        Al hacer su primera compra de 20€ o más (Algunas veces no requiere ni eso, lo digo por experiencia propia).
                        GANA 5€ que se mueven al espacio de acciones de empresa (Espacio en el que se puede ganar más dinero, 
                        nunca menos, por tener acciones de la empresa favorita que queramos).
                    </li>
                    <li>3 Meses de Premium 🥳 (Cashback en Spotify, Netflix y mucho más)</li>
                    <li>
                        1 Mes de SUPER Ventajas 💡🥳 (Cashback aumentado en diferentes comercios)
                        ❗ Tienes por aquí un vídeo, mostrando las ganancias que he obtenido en mi caso, pagando con la tarjeta de Vivid 💜
                    </li>
                </ul>

                <p className="text-justify">
                    Aquí le indico las ventajas de Vivid Money en diferencia con otros bancos 👇
                </p>

                <ul className="list-custom">
                    <li>Ofrece tarjeta virtual VISA y metálica GRATIS 🥳</li>
                    <li>Hasta 15 IBAN repartidos en una cuenta GRATUITA 💡</li>
                    <li>Sin comisiones y retirada en efectivo GRATUITA 💜</li>
                    <li>
                        Transferencias Bancarias GRATUITAS
                        (En algunas ocasiones por experiencia me ha tardado menos de 12hrs, pero lo normal son 2 días hábiles)
                    </li>
                    <li>
                        Ganancias del cashback para la inversión de acciones 💸
                    </li>
                    <li>
                        SUPER Seguridad en la cuenta, ya que en la Tarjeta Metálica solo aparece el nombre del mismo,
                        los últimos 4 dígitos de la tarjeta y nada más 🥇
                    </li>
                    <li>
                        Ofrece 3 tarjetas por cuenta (2 virtuales y una metálica)
                        OJO 👀 : La primera virtual y metálica son GRATIS, después ya hay que pagar un determinado precio ⚠
                    </li>
                    <li>
                        La última ventaja de tener Vivid, es que si damos los datos de nuestra tarjeta y se ven comprometido los datos,
                        se pueden volver a generar los datos de la misma. 🥳🎉🎉
                    </li>
                </ul>

                <div className="alert alert-success" role="alert">
                    Especifico en el anterior punto, que se puede volver a generar los datos de la tarjeta, 
                    es una ventaja de la que solo Vivid tiene, y digo solo porque si lo comparamos con otros bancos, estos no lo tienen 😢
                </div>

                <h3 className="h5 text-primary mb-4">🔥 ALGUNAS de las SUPER VENTAJAS 💸</h3>
                <p className="text-justify">
                    Estas son algunas de las tiendas que PUEDEN salir en las SUPER VENTAJAS.

                    *** ACTUALIZAR TODO ESTO JEJE ***
                </p>

                <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../img/vivid-money/beneficios-cashback.png" class="d-block rounded mx-auto d-block img-fluid" 
                                alt="..." title="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="../img/vivid-money/beneficios-cashback2.png" class="d-block rounded mx-auto d-block img-fluid" 
                                alt="..." title="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> 
                </div>

                <div className="alert alert-danger mt-4 mb-4">
                    * Estas imágenes están sacadas de la propia página de Vivid y algunas ventajas no están, pero no es decir que vayan a salir, porque actualizan continuamente 👏
                    <br /><br />
                    Por lo que también es que a algunos le aparece el cashback de Mercadona "al 50%", es según algunos factores.
                </div>
                {/* <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#ventajas-youGov" className="list-group-item list-group-item-action list-group-item-dark">
                            1. 🥇 Ventajas y Desventajas de YouGov
                        </a>
                        <a href="#sistema-referidos" className="list-group-item list-group-item-action list-group-item-dark">
                            2. 🥈 Sistema de Referidos
                        </a>
                        <a href="#premios-youGov" className="list-group-item list-group-item-action list-group-item-dark">
                            3. 🥉 ¿Cuáles son los premios disponibles?
                        </a>
                    </div>
                </div> */}
            </div>

            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="h5 text-danger">⚡ Otros Bancos ONLINE ⚡</h4>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras bancos online que podrían interesarle.
                        </p>

                        <ul className="enlaces">
                            <li className="">
                                Rebellion: Banco móvil en el que se puede abrir cuenta a partir de 14 años 🤯
                                <br />
                                <a href="https://bit.ly/rebellionCR" target="_blank" rel="noopener noreferrer" 
                                    title="Únete a Rebellion, banco online y gana dinero">
                                    Gana HASTA 5€ por UNIRTE Conmigo y Aprovecha las Promociones que hay! 🥳🥳
                                </a>
                            </li>
                            <li className="">
                                Verse App 💙 (Aplicación de Pagos Móviles y MUCHO MÁS 💫)
                                <br />
                                <Link exact to="/verse-app/" title="Mira más información sobre Verse 💙">
                                    Aprovecha y descarga Verse para hacer pagos con amigos en segundos, además
                                    de poder ganar 5€ al UNIRTE y SOLO tener que MOVER 1€ ¿te lo vas a perder? 👋💙
                                </Link>
                            </li>
                        </ul> 
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="h5 text-danger mb-4">💫 Reels sobre Vivid Money 💫</h4>
                        <video src="../videos/reels-vividmoney.mp4" weight="700" height="700" controls autoplay></video>
                    </div>
                </div>
            </div>
        </>
    )
}