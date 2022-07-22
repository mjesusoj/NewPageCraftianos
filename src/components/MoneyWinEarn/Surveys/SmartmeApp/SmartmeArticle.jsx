import React from 'react';

export const SmartmeArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">SmartmeApp</h1>
                <h2 className="h4 text-primary mb-4">🤑 Responde encuestas cortas y gana dinero</h2>
                <p className="text-justify">
                    Smartme App es una aplicación de investigación de mercados de la compañía SMART ANALYTICS S.L,
                    está disponible en la Play Store (Android) y App Store (iOS). <br /> <br />
                </p>
                
                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#instalacion-smartmeapp" className="list-group-item list-group-item-action list-group-item-dark">
                            1. ✅ Instalación y Registro
                        </a>
                        <a href="#funcionamiento-smartmeapp" className="list-group-item list-group-item-action list-group-item-dark">
                            2. ✅ Funcionamiento de SmartmeApp
                        </a>
                        <a href="#retiro-smartmeapp" className="list-group-item list-group-item-action list-group-item-dark">
                            3. ✅ ¿Cómo retirar en SmartmeApp? - ¿Es FIABLE?
                        </a>
                    </div>
                </div>

                <div id="instalacion-smartmeapp">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Instalación y Registro</h3>
                    <p className="text-justify">
                        Para empezar hay que descargar la app a través de la Play Store o App Store,
                        en este caso os dejo un enlace a la Play Store (Android) 
                        para descargar directamente la app de Smartme.
                    </p>
                    <div className="descarga-smartmeapp enlaces">
                        <a href="https://play.google.com/store/apps/details?id=com.smartme.analytics" 
                            target="_blank" rel="noopener noreferrer">Enlace directo para descargar la app</a>
                    </div>
                    <p className="text-justify mt-2">
                        Al descargar la app, tenéis que registraros con una cuenta de Google o correo electrónico
                        y poner mi código 663328 cuando os lo pidan, 
                        ya que os dan 1€ + 0,10€ de bono de bienvenida
                    </p>
                </div>

                <div id="funcionamiento-smartmeapp">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Funcionamiento de SmartmeApp</h3>
                    <p className="text-justify">
                        El funcionamiento de SmartmeApp es muy sencillo, 
                        en la pantalla principal están todas las encuestas disponibles, entre otros concursos especiales,
                        las demás funciones están al acceder a la barra de navegación.
                    </p>
                    <ul>
                        <li>
                            Lista de opciones xd, perfil, hucha de smartme, etc.
                        </li>
                        <li>
                            Participar en encuestas cortas de menos de 5 min.
                        </li>
                        <li>
                            Por usar el móvil (Hay que tener la app abierta en segundo plano).
                        </li>
                        <li>
                            Comprando en las tiendas disponibles en el club smartme (Recibir cashback).
                        </li>
                    </ul>
                </div>

                <div id="retiro-smartmeapp">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo retirar en SmartmeApp? - ¿Es FIABLE?</h3>
                    <p className="text-justify">
                        El retiro de dinero en SmartmeApp  funciona tal que, 
                        solo hay que llegar al mínimo de 5€, 
                        tener una cuenta bancaria en España en la que ingresarlo.
                        Para ello hay que ir al menú de navegación e ir a la cuenta VIP,
                        indicamos los datos, perdila y solo tenemos que esperar a que nos llegue,
                        normalmente llega en 2 días laborales, es decir si lo pides el viernes, 
                        te llegará el martes.
                    </p>
                    <img loading="lazy" class="rounded mx-auto d-block w-50" src="../img/smartme-app/comprobante.png"
                        alt="Comprobante Transferencia Smartme-app" />
                    <div className="alert alert-warning mt-4">
                        La transferencia la pedí para que me llegará a mi cuenta de Rebellion, poner texto de enlace xdddd
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="h5 text-danger">⚡ Otras apps similares ⚡</h4>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otros apps similares a SmartmeApp que he probado y que recomiendo ✅
                        </p>
                        <ul className="enlaces">
                            <li className="fw-bold">
                                <a href="https://bit.ly/attapollCR" target="_blank" rel="noopener noreferrer" 
                                    title="Enlace de Registro a AttaPoll ✅">
                                    🥇 AttaPoll: Mucho más simple y el mínimo para retirar por PayPal o Bitcoin está a 1$ ✅
                                </a>
                            </li>
                            <li className="fw-bold">
                                <a href="https://bit.ly/attapollCR" target="_blank" rel="noopener noreferrer" 
                                    title="Enlace de Registro a PollPay ✅">
                                    🥇 PollPay: Mucho más simple y el mínimo para retirar por PayPal o Bitcoin está a 1$ ✅
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}