import React from 'react';
import { Link } from 'react-router-dom';
 
/* Create Shortcut */
export const NothingArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-7 mt-2 article">
                <h1 className="h4 text-primary mb-4" id="ingresos-pasivos">
                    🤠 ¿Ganar Ingresos Pasivos sin hacer nada?
                </h1>

                <div className="honeygain card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/honeygain/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/honeygain/">
                                    <h2 className="h5 card-title">🏅 HoneyGain: Gana 5$ al Unirte </h2>
                                </Link>
                                <p className="card-text">
                                    Gana dinero compartiendo el internet que no uses y
                                    retira cuando llegues a 20$ en tu cuenta de PayPal o en Bitcoin 🚀
                                </p>
                                <Link className="btn btn-outline-success" exact to="/honeygain/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="iproyal card mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Link exact to="/iproyal/">
                                <img 
                                    className="img-fluid card-img" 
                                    src="../img/otros/dinero-sin-hacer-nada.png" 
                                    alt="Imagen Ingresos Pasivos"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 enlaces">
                            <div className="card-body">
                                <Link exact to="/iproyal/">
                                    <h2 className="h5 card-title">🥇 IPRoyal Panws: Retira el dinero a los 5$</h2>
                                </Link>
                                <p className="card-text">
                                    Otro programa con el que podrás ganar dinero compartiendo el internet que no uses y
                                    retira cuando llegues a 5$ en tu cuenta de PayPal o en Bitcoin 🚀
                                </p>
                                <Link className="btn btn-outline-success" exact to="/iproyal/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="smartme-app card mb-5">
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
                                    <h2 className="h5 card-title">🥈 Smartme-App: Gana más de 1€ al UNIRTE</h2>
                                </Link>
                                <p className="card-text">
                                    Con SmartmeApp podrás ganar dinero utilizando el smartphone y 
                                    contestando encuestas muy cortas (relativamente cortas ✅)
                                    <br /><br />
                                    Si te unes con mi código: <b>663328</b>
                                    (Ganarías tu primer 1€ y mucho MÁS 🚀)
                                    <br /><br />
                                    🔴 Solo disponible para España 😅
                                </p>
                                <Link className="btn btn-outline-success" exact to="/smartme-app/">
                                    Pulsa aquí para ver más 👏
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2 mb-5">
                <div className="bannerIpRoyal col-7 ms-5">
                    <a href="https://bit.ly/iproyalCR" target="_blank" rel="noreferrer">
                        <img className="img-fluid rounded mx-auto d-block w-100 mt-4" src="https://pawns.iproyal.com/img/b/160.jpg" 
                            alt="Banner IpRoyal Panws - Gana dinero sin hacer nada" 
                            title="Banner IpRoyal Panws - Gana dinero sin hacer nada" loading="lazy" />
                    </a>
                </div>
            </div>
        </>
    )
}