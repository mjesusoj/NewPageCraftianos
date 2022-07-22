import React from 'react';
import { Link } from 'react-router-dom';

/* Create Shortcut */
export const SurveysArticle = () => {
    return (
        <>
            {/* <div className="col col-md-3"></div> */}
            {/* <span>Migas de pan</span> */}
            <div className="col-12 col-md-7 mt-2 article">
                <h1 className="h4 text-primary mb-4" id="apps-encuestas">
                    Plataformas Encuestas - Compartir opiniones a cambio de dinero 💰
                </h1>

                <div className="ipsos-isay card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/ipsos-isay/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/ipsos-isay/">
                                    <h2 className="h5 card-title">🏅 Ipsos Isay </h2>
                                </Link>
                                <p className="card-text">
                                    Página líder en encuestas, con la que podremos ganar Cupones de Amazon, 
                                    Saldo en Paypal, Tarjeta Virtual Mastercard y mucho más con dar nuestra opinión a diversos estudios.
                                </p>
                                <Link className="btn btn-outline-success" exact to="/ipsos-isay/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                            <div className="card-footer alert alert-danger">
                                ¡NUEVA ACTUALIZACION AMIGOS!
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prize-rebel card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/prize-rebel/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/prize-rebel/">
                                    <h2 className="h5 card-title">🏅 Prize Rebel </h2>
                                </Link>
                                <p className="card-text">
                                    Prize Rebel es una de las mejores páginas de encuestas, que puedes encontrar por internet, 
                                    junto a Ipsos Isay, con Prize Rebel puedes ganar puntos por realizar encuestas (MUCHAS encuestas), concursos, 
                                    invitando amigos y estar atento de las redes sociales. Uno de los mejores sistemas de referidos 👬
                                </p>
                                <Link className="btn btn-outline-success" exact to="/prize-rebel/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="marketagent card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/marketagent/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/marketagent/">
                                    <h2 className="h5 card-title">🏅 MarketAgent </h2>
                                </Link>
                                <p className="card-text">
                                    MarketAgent es otra página de encuestas para recibir dinero extra.
                                    Los puntos ganados se pueden retirar en Paypal, Skrill y por Transferencia Bancaria.
                                    En Paypal se puede retirar a partir de 10€ y 5€ si es Transferencia.
                                </p>
                                <Link className="btn btn-outline-success" exact to="/marketagent/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="yougov card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/yougov/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/yougov/">
                                    <h2 className="h5 card-title">🏅 Yougov </h2>
                                </Link>
                                <p className="card-text">
                                YouGov es de la mejor plataforma de encuestas online, está disponible para todo el mundo.
                                Con compartir nuestra opinión en diferentes estudios, podemos ganar 25€ en cupones de Amazon y 50€.
                                Mira más información sobre YouGov y regístrate para empezar a ganar premios. 👇
                                </p>
                                <Link className="btn btn-outline-success" exact to="/yougov/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                            {/* <div class="card-footer alert alert-danger mt-4">
                                🔥 ACTUALIZACION: En este momento YA SE PUEDE retirar a través de Transferencia Bancaria a los bancos 👏👏
                                <br /><br />
                                * Recomiendo retirarlo a Rebellion o Vivid, ya que se gana dinero por registrarse 🥰💸 <br />
                                (Ir a la sección de Bancos a través de la Navegación ❗)
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="smartmeapp card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/smartme-app/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/smartme-app/">
                                    <h2 className="h5 card-title">🏅 Smartme App </h2>
                                </Link>
                                <p className="card-text">
                                    Smartme App es una aplicación multiplataforma, con la que podremos realizar encuestas cortas, 
                                    tenerla abierta en segundo plano, invitar a amigos y recibir cashback con el club smartme.
                                </p>
                                <Link className="btn btn-outline-success" exact to="/smartme-app/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="attapoll card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/attapoll/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/attapoll/">
                                    <h2 className="h5 card-title">🏅 AttaPoll </h2>
                                </Link>
                                <p className="card-text">
                                    App multiplataforma de encuestas renumeradas, con el mínimo de retiros en 2,50€ en Revolut y en Paypal 3,00€. 
                                    Solo con registrarte y realizar las encuestas de perfiles empiezas a ganar dinero 🤑
                                </p>
                                <Link className="btn btn-outline-success" exact to="/attapoll/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pollpay card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/pollpay/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/pollpay/">
                                    <h2 className="h5 card-title">🏅 PollPay </h2>
                                </Link>
                                <p className="card-text">
                                    App multiplataforma con la que podremos conseguir por 5€ un cupón regalo de Amazon, 
                                    retirar 5€ en Paypal y muchas más recompensas. Fantástico sistema de referidos. 👬
                                </p>
                                <Link className="btn btn-outline-success" exact to="/pollpay/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}