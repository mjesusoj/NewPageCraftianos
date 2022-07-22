import React from 'react';

export const IpsosIsayArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">📙 Ipsos Isay</h1>
                <h2 className="h4 text-primary mb-4">✅ Da tu opinión y recibe dinero extra 🔥</h2>
                <p className="text-justify">
                    Ipsos Isay es una plataforma de encuestas que te permite publicar tu opinión 
                    y recibir dinero extra en premios como:
                </p>

                <ul className="fw-bold">
                    <li>Tarjetas Regalo PayPal</li>
                    <li>Tarjetas Regalo MediaMarkt</li>
                    <li>Cheques Regalo Amazon</li>
                    <li>Y mucho más... 🤗</li>
                </ul>
                
                <p className="text-justify enlaces">
                    Fue creada en 1975, es la tercera empresa de estudios de mercado basados en encuestas del mundo y
                    está distribuida en más de 80 países, tenéis más información en su página web 👉 
                    <a href="https://www.ipsosisay.com/es-es/about-us" target="_blank" rel="noopener noreferrer"> https://www.ipsosisay.com/es-es/about-us </a>
                </p>

                <a href="https://www.ipsosisay.com/es-es/" className="btn btn-outline-success mb-4" target="_blank" rel="noopener noreferrer">
                    Actualmente no disponible el enlace de afiliados, registrar por su cuenta
                </a>

                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#funcionamiento-isay" className="list-group-item list-group-item-action list-group-item-dark">
                            1. ¿Cómo funciona Ipsos Isay?
                        </a>
                        <a href="#encuestas-isay" className="list-group-item list-group-item-action list-group-item-dark">
                            2. Funcionamiento de las Encuestas?
                        </a>
                        <a href="#fidelidad-isay" className="list-group-item list-group-item-action list-group-item-dark">
                            3. Fidelidad por ser de Ipsos Isay
                        </a>
                        <a href="#nueva-actualizacion-isay" className="list-group-item list-group-item-action list-group-item-dark">
                            4. NUEVA ACTUALIZACIÓN
                        </a>
                        <a href="#premios-isay" className="list-group-item list-group-item-action list-group-item-dark">
                            5. Premios disponibles en Ipsos Isay
                        </a>
                        <a href="#retiro-isay" className="list-group-item list-group-item-action list-group-item-dark">
                            6. ¿Es Fiable Ipsos Isay? | Premios Retirados 💰
                        </a>
                    </div>
                </div>

                <div id="funcionamiento-isay">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo funciona Ipsos Isay?</h3>
                    <p className="text-justify">
                        Ipsos Isay es como otras plataformas de encuestas, su funcionamiento es muy sencillo, nos llegan encuestas y las procedemos a hacer,
                        se recibe notificaciones en el email con el que estamos registrados en la plataforma.
                    </p>
                </div>

                <div id="encuestas-isay">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Funcionamiento de las Encuestas</h3>
                </div>

                <div id="fidelidad-isay">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Fidelidad por ser de Ipsos Isay</h3>
                </div>

                <div id="nueva-actualizacion-isay">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ NUEVA ACTUALIZACION</h3>
                    <p className="text-justify">
                        Hace poco tiempo actualizaron la página y algunas cosas como el programa de referidos no está activo, además cambio algunas cosas, 
                        como el diseño, etc.
                    </p>
                </div>

                <div id="premios-isay">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Premios Disponibles en Ipsos Isay</h3>
                </div>

                <div id="retiro-isay">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Es Fiable Ipsos Isay? | Premios Retirados 💰</h3>
                </div>

            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="h5 text-danger">⚡ Otras plataformas de encuestas ⚡</h4>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras plataformas de encuestas, que recomiendo 👇⚡
                        </p>
                        <ul className="enlaces">
                            <li className="fw-bold">
                                <a href="https://bit.ly/yougovCR" target="_blank" rel="noopener noreferrer" 
                                    title="Enlace de Registro a YouGov ✅">
                                    🥇 YouGov: Otra de las mejores en mi opinión 🤯
                                </a>
                            </li>
                            <li className="fw-bold">
                                <a href="https://cutt.ly/swagbucksCR" target="_blank" rel="noopener noreferrer" 
                                    title="Enlace de Registro a SwagBucks ✅">
                                    🥈 SwagBucks: Combina encuestas con juegos y cashback
                                </a>
                            </li>
                        </ul>

                        <h5 className="h6 text-warning">Para Residentes en España</h5>

                        <ul className="enlaces">
                            <li className="fw-bold">
                                <a href="/smartme-app/" target="_blank" title="Enlace para ver más información de Smartme App ✅">
                                    🥈 SmartmeApp: Puedes ganar dinero de muchas manera, 
                                    al día recibes 300pts por compartir tus datos de uso del móvil ✅
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}