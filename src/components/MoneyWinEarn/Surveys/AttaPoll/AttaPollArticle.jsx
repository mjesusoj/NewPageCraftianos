import React from 'react';

export const AttaPollArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">📙 AttaPoll: Gana dinero haciendo encuestas desde el móvil </h1>
                <h2 className="h4 text-primary mb-4">✅ Encuestas Renumeradas para ganar dinero extra</h2>
                <p className="text-justify">
                    AttaPoll es una aplicación multiplataforma, la cual está disponible para android e iOS. <br /><br />
                    Aquí os cuento como funciona y si es FIABLE
                </p>
                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#funcionamiento-attapoll" className="list-group-item list-group-item-action list-group-item-dark">
                            1. ✅ ¿Cómo funciona AttaPoll?
                        </a>
                        <a href="#ganar-dinero-attapoll" className="list-group-item list-group-item-action list-group-item-dark">
                            2. ✅ ¿Cómo ganar dinero con AttaPoll?
                        </a>
                        <a href="#premios-attapoll" className="list-group-item list-group-item-action list-group-item-dark">
                            3. ✅ Premios disponibles en AttaPoll
                        </a>
                        <a href="#pago-attapoll" className="list-group-item list-group-item-action list-group-item-dark">
                            4. ✅ ¿AttaPoll es FIABLE? | Comprobantes de Pago 📋
                        </a>
                    </div>
                </div>

                <div id="funcionamiento-attapoll">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo funciona AttaPoll?</h3>
                    <p className="text-justify">
                        Pues bien la app de AttaPoll es muy sencilla de utilizar, 
                        solo hay que registrarse y empezar a responder encuestas de perfil, 
                        después de esto, nos llegarán encuestas dependiendo de varios factores,
                        como el de antes de responder las encuestas de perfil.
                    </p>
                </div>

                <div id="ganar-dinero-attapoll">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo ganar dinero con AttaPoll?</h3>
                    <p className="text-justify">
                        Aquí voy decir las formas con las que se puede ganar dinero con con AttaPoll 💸👏
                    </p>
                    <ul className="fw-bold">
                        <li>
                            Realizando Encuestas de Perfil y Encuestas Normales ✅
                        </li>
                        <li>
                            Invitando a amigos 🥰 (10% ganancias del referido para el recomendador)
                        </li>
                    </ul>
                </div>

                <div id="premios-attapoll">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Premios disponibles en AttaPoll</h3>
                    <p className="text-justify">
                        A continuación os muestro los premios que se pueden obtener al responder a las encuestas,
                        antes decir que la cantidad mínima a retirar es 2,50€ ✅
                    </p>
                    <ul className="fw-bold">
                        <li>Cheque Regalo de Amazon (mínimo de retiro: 2,50€)</li>
                        <li>NIKE 5€</li>
                        <li>ZALANDO ES 5€</li>
                        <li>PAYPAL 3€</li>
                        <li>REVOLUT 2,50€</li>
                        <li>DONACION 2,50€</li>
                    </ul>
                </div>

                <div id="pago-attapoll">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿AttaPoll es FIABLE? | Comprobantes de Pago 📋</h3>
                    {/* <img loading="lazy" className="img-fluid rounded mx-auto d-block w-75 mb-4" src="../img/widilo/widilove.webp" alt="Widilove" /> */}
                    
                </div>
            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="h5 text-danger">⚡ Otras programas similares ⚡</h4>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otros programas similares a attapoll que he probado y que recomiendo ✅
                        </p>
                        <ul className="enlaces">
                            <li className="fw-bold">
                                <a href="https://bit.ly/iproyalCR" target="_blank" rel="noopener noreferrer" 
                                    title="Enlace de Registro a PollPay ✅">
                                    🥇 PollPay: Mucho más completa y fácil de usar
                                </a>
                            </li>
                        </ul>

                        <h5 className="h6 text-warning">Para Residentes en España</h5>

                        <ul className="enlaces">
                            <li className="fw-bold">
                                <a href="/smartme-app" target="_blank" title="Enlace para ver más información de Smartme App ✅">
                                    🥈 SmartmeApp: Puedes ganar dinero de muchas manera, 
                                    al día recibes 300pts por compartir tus datos de uso del móvil ✅
                                </a>
                            </li>
                        </ul>

                        <span className="h6 text-warning mt-2">Únete desde aquí a AttaPoll 🐝💸</span>
                        <p className="text-justify mt-4">
                            {/* <a className="btn btn-outline-success btn-block" href="https://bit.ly/attapollCR" target="_blank" 
                                rel="noopener noreferrer" title="Enlace de Registro a attapoll 🐦">
                                    Únete y recibe tus primeros 5$ GRATIS 👏
                            </a> */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}