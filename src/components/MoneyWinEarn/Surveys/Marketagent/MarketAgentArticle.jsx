import React from 'react';

export const MarketAgentArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">📙 MarketAgent</h1>
                <h2 className="h4 text-primary mb-4">✅ Da tu opinión y recibe dinero extra 🔥</h2>
                <p className="text-justify">
                    MarketAgent es un panel de encuestas renumeradas, disponible en casi todos los países del mundo.
                    Con esta plataforma compartimos nuestra opinión totalmente relevante y a cambio, podemos ganar dinero en:
                </p>

                <ul className="fw-bold">
                    <li>Tarjetas Regalo PayPal</li>
                    <li>Transferencia Bancaria</li>
                    <li>Wise o Skrill</li>
                    <li>Apadrinar un Árbol</li>
                    <li>Y Donar a varias ONG 🤗</li>
                </ul>
                
                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#registro-marketAgent" className="list-group-item list-group-item-action list-group-item-dark">
                            1. 🥇 Registro y Funcionamiento de MarketAgent
                        </a>
                        <a href="#premios-marketAgent" className="list-group-item list-group-item-action list-group-item-dark">
                            2. 🥈 Premios disponibles para conseguir
                        </a>
                        <a href="#retiro-marketAgent" className="list-group-item list-group-item-action list-group-item-dark">
                            3. 🥉 ¿Es Fiable MarketAgent? | Comprobante de premio retirado por PayPal
                        </a>
                    </div>
                </div>

                <div id="registro-marketAgent">
                    <h3 className="h5 text-danger mt-4 mb-4">🥇 Registro y Funcionamiento de MarketAgent</h3>
                    <p className="text-justify">
                        Para poder participar en MarketAgent, debes registrarte en la plataforma.
                        
                        
                        Además cuenta con una app multiplataforma disponible en Android e IOS. 
                    </p>
                </div>

                <div id="premios-marketAgent">
                    <h3 className="h5 text-danger mt-4 mb-4">🥈 Premios disponibles para conseguir</h3>
                </div>

                <div id="retiro-marketAgent">
                    <h3 className="h5 text-danger mt-4 mb-4">🥉 ¿Es Fiable MarketAgent? | Comprobante de premio retirado por PayPal</h3>
                </div>
            </div>

            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="h5 text-danger">⚡ Otras plataformas de encuestas ⚡</h4>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras páginas de encuestas que podrían interesarle.
                        </p>

                        <ul className="enlaces">
                            <li className="fw-bold">
                                Ipsos Isay
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    )
}