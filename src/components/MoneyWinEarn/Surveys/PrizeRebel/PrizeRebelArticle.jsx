import React from 'react';

export const PrizeRebelArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">📙 PrizeRebel: Gana dinero realizando múltiples opciones </h1>
                <h2 className="h4 text-primary mb-4">✅ Muchas Encuestas y un buen sistema de referidos</h2>
                <p className="text-justify">
                    Prize Rebel es una de las mejores páginas de encuestas, que puedes encontrar por internet,
                    junto a Ipsos Isay, con Prize Rebel puedes ganar puntos por realizar encuestas (MUCHAS encuestas),
                    concursos, invitando amigos y estar atento de las redes sociales. <br /><br /> 
                    <b>
                        Lo mejor de esta plataforma en comparación de otras, es que Prize Rebel está disponible 
                        para todo el mundo 🌐
                    </b>
                </p>

                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#funcionamiento-prizerebel" className="list-group-item list-group-item-action list-group-item-dark">
                            1. ✅ Registro en PrizeRebel y Funcionamiento
                        </a>
                        <a href="#ganar-prizerebel" className="list-group-item list-group-item-action list-group-item-dark">
                            2. ✅ ¿Cómo ganar dinero?
                        </a>
                        <a href="#premios-prizerebel" className="list-group-item list-group-item-action list-group-item-dark">
                            3. ✅ ¿Cuáles son los premios disponibles?
                        </a>
                        <a href="#fidelidad-prizerebel" className="list-group-item list-group-item-action list-group-item-dark">
                            4. ✅ Programa de Fidelidad | ¿Cómo funciona?
                        </a>
                        <a href="#retiro-prizerebel" className="list-group-item list-group-item-action list-group-item-dark">
                            5. ✅ ¿Es Fiable PrizeRebel? | Comprobante de Pago 📋
                        </a>
                    </div>
                </div>

                <div id="funcionamiento-prizerebel">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Registro en PrizeRebel y Funcionamiento</h3>
                    <p className="text-justify">
                        Para registrarse en PrizeRebel, solo necesitas acceder desde mi link de invitación 👇 y completar el formulario de registro,
                        esto es un mismo proceso que para cualquier otra web, indicar nombre, apellido, una dirección de correo electrónico 
                        y una contraseña (a ser segura, recomiendo que se utilice un gestor de contraseñas para no tener que recordar ninguna contraseña y
                        utilizar en todos los sitios una diferente 🔐), después de esto, ya estás registrado en PrizeRebel 
                        y puedes empezar a hacer encuestas, entre otras cosas
                    </p>

                    <a className="btn btn-outline-success mt-2" href="https://bit.ly/prizeRebelCR" target="_blank" rel="noopener noreferrer">
                        👋 Regístrate desde aquí y empieza a ganar dinero con PrizeRebel ✅
                    </a>
                </div>

                <div id="ganar-prizerebel">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo ganar dinero?</h3>
                    <p className="text-justify">
                        Aquí os dejo una lista de las formas de ganar dinero con PrizeRebel 👇
                    </p>
                    <ul>
                        <li>
                            🚀 Realizar encuestas de diferentes partnets, variedad de encuestas que contestar.
                        </li>
                        <li>
                            🚀 Sistema de referidos, 20% de ganancias de cada referido para el recomendador.
                        </li>
                        <li>
                            🚀 También como un bonus, algunas veces en las redes sociales de la propia plataforma,
                            publican algunos códigos que dan pts de ganancia.
                        </li>
                    </ul>
                </div>

                <div id="premios-prizerebel">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cuáles son los premios disponibles?</h3>
                    <p className="text-justify">
                        Estos son algunos premios que están disponibles para ganar con PrizeRebel 👇💚
                    </p>
                    <div id="carousel" className="carousel slide mt-4" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img loading="lazy" className="d-block w-100" 
                                    src="../img/prize-rebel/recompensas_prizerebel.png" title="Algunas recompensas de PrizeRebel" 
                                    alt="Algunas recompensas de PrizeRebel" />
                            </div>
                            <div className="carousel-item">
                                <img loading="lazy" className="d-block w-100" 
                                    src="../img/prize-rebel/recompensas2_prizerebel.png" title="Otras recompensas de PrizeRebel"
                                    alt="Otras recompensas de PrizeRebel" />
                            </div>
                        </div>
                    </div>
                    <div className="alert alert-info mt-4">
                        Al seleccionar los premios, hay que tener cuidado, ya que podemos canjear cupones de Amazon 
                        y los que cuestan 500pts son para Amazon.com no para Amazon.es, ya que los 5€ en Amazon España son 599pts.
                    </div>
                </div>

                <div id="fidelidad-prizerebel">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Programa de Fidelidad | ¿Cómo funciona?</h3>
                    <img loading="lazy" className="img-fluid rounded mx-auto d-block w-100 mb-4" src="../img/prize-rebel/fidelidad_prizerebel.png" 
                        title="Programa de Fidelidad de PrizeRebel" alt="Programa de Fidelidad de PrizeRebel" />
                    <p className="text-justify enlaces">
                        Se comienza en el nivel Bronze y se sube de nivel al llegar a cierta cantidad de puntos, por ejemplo,
                        para subir al nivel Silver (Plata), se necesitan 1000pts y se obtiene un beneficio de 5% más por los referidos
                        y así hasta llegar al último que es el Diamond (Diamante), que es el más exclusivo y el que da más beneficios 🤯
                    </p>
                </div>

                <div id="retiro-prizerebel">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Es Fiable PrizeRebel? | Comprobante de Pago 📋</h3>
                    <p className="text-justify">
                        PrizeRebel es una plataforma de la empresa "iAngelic, Inc" , ubicada en el estado de Nevada (Estados Unidos). <br />
                        Lleva en el mercado unos años y no se trata de SCAM, ya que cumple con todos los requisitos para no carecer de un timo. <br/>
                        Por aquí os enseño el pago en mi cuenta de Paypal, para que veaís que es totalmente FIABLE 🟢👏
                    </p>
                    <img loading="lazy" class="img-fluid rounded mx-auto d-block mt-4" src="../img/prize-rebel/pago_prizerebel.png" 
                        title="Comprobante de Pago de PrizeRebel" alt="Comprobante de Pago de PrizeRebel" />
                    <a className="btn btn-outline-success btn-block mt-4" href="https://bit.ly/prizerebelCR" 
                        target="_blank" rel="noopener noreferrer" title="Enlace de Registro a prizerebel 🐦">
                            Si quieres ganar estos premios como yo, hazme clic 💚🚀
                    </a>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="h5 text-danger">⚡ Otras plataformas de encuestas ⚡</h4>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras plataformas de encuestas que he probado y que recomiendo ✅
                        </p>
                        <ul className="enlaces">
                            <li className="fw-bold">
                                <span>🥇 Ipsos Isay: </span>
                                <a href="/ipsos-isay" title="Enlace para ver más información sobre Ipsos Isay">
                                    Llevo unos años, he retirado muchos premios y tengo que decir que es una de las mejores 👍 
                                    (Disponible solo en Europa)
                                </a>
                            </li>
                            <li className="fw-bold">
                                <span>🥈 YouGov: </span>
                                <a href="/yougov" title="Enlace para ver más información sobre Ipsos Isay">
                                    En esta llevo poco tiempo, pero entran muchas encuestas y son cortas ✅ 
                                    (Disponible en todo el mundo)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}