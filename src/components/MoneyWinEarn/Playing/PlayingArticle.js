import React from 'react';
import { Link } from 'react-router-dom';

/* Create Shortcut */
export const PlayingArticle = () => {
    return (
        <>
            {/* <div className="col col-md-3"></div> */}
            <div className="col-12 col-md-7 mt-2 article">
                <h1 className="h4 text-primary mb-4">Diviértete jugando y ganando dinero extra ✅ </h1>
                <h2 class="h4 text-primary mb-4">Ganar dinero por internet jugando juegos 🎮</h2>
                <p class="text-justify">
                    En esta sección os hablo de otra manera de generar ingresos extras, 
                    os dejo las plataformas o apps con la que poseen 
                    juegos para ganar dinero desde casa, 
                    además en las siguientes apps se puede conseguir dinero de otras formas, 
                    no solo jugando 🤗
                </p>

                <div className="gamee card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/gamee/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/gamee/">
                                    <h3 className="h5 card-title">✅ Gamee: Variedad de juegos y gana dinero jugándolos</h3>
                                </Link>
                                <p className="card-text">
                                    Con Gamee puedes ganar dinero juegando a juegos gratis, hay muchísima variedad de juegos, 
                                    por lo que también se puede ganar dólares, girando la ruleta de la suerte, 
                                    ingresando cada día a Gamee, se ganan más spins gratis. <br /><br />
                                    Además si estas todos los días ingresando, el día 7 tienes una ruleta, la cual da dinero 100% ✅
                                    (Se retira al llegar a los 10$ a PayPal ⚡)
                                </p>
                                <Link className="btn btn-outline-success" exact to="/gamee/">
                                    Pulsa aquí para ver cómo 🚀
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mistplay card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/enlaces/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link to="/enlaces/">
                                    <h3 className="h5 card-title">✅ MistPlay: Múltiples opciones parar retirar el dinero generado</h3>
                                </Link>
                                <p className="card-text">
                                    Con MistPlay podrás ganar dinero jugando a tus juegos favoritos, además de los disponibles 🎮💡
                                    <br />
                                    (Y ganar pts con ello y ahorrar para canjear más tarde algunos regalos, como Cupones para Amazon,
                                    Tarjeta Mastercard Virtual, etc)
                                    <br /><br />
                                    Ve a registrarte y a ganar dinero jugando! 🎁✨
                                </p>
                                <Link className="btn btn-outline-success" to="/enlaces/">
                                    Pulsa aquí para ver cómo 🚀
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swagbucks card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/enlaces/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/enlaces/">
                                    <h3 className="h5 card-title">✅ SwagBucks: Múltiples opciones para ganar dinero</h3>
                                </Link>
                                <p className="card-text">
                                    Con esta plataforma además de ganar dinero jugando a juegos, 
                                    se pueden responder encuestas a cambio de money, participar en concursos 
                                    y muchísimo más.
                                    <br />
                                    Invito a que te registres 👇 y 
                                    investigues la página para que empieces a ganar dinero desde ya
                                    <br />
                                    P.D: Está repleta de opciones para ganar dinero 🥰💸
                                </p>
                                <Link className="btn btn-outline-success" exact to="/enlaces/">
                                    Pulsa aquí para ver cómo 🚀
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}