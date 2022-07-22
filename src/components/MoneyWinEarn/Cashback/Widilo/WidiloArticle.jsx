import React from 'react';

export const WidiloArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                {/* //* Modificar estructura web xd */ }
                <h1 className="h3 text-primary mb-4">Widilo 🎁 - Recibe dinero haciendo compras online</h1>
                <h2 className="h4 text-primary mb-4">Beneficios por comprar con Widilo</h2>
                <p className="text-justify enlaces">
                    Widilo es otra de las mejores plataformas de cashback, con la que obtendremos 5€ totalmente gratuitos 
                    al realizar nuestra primera compra, sin mínimo. <br/><br/>
                    Está disponible actualmente en España, Francia y Bélgica. 
                    La empresa que gestiona esta plataforma es Widilo Ltd, cuya sede central está en París (Francia),
                    aunque el propietario de la página es AFILIZA, ya que Widilo es una marca registrada por esta.
                    Tiene más de 1.000 tiendas en las que te devuelven cashback y en las que se puede ganar mejor que en otras.
                    Si quieres ver más información acerca de las condiciones generales, haz clic aquí 👉 
                    <a className="fw-bold" href="https://www.widilo.es/condiciones-legales" target="_blank" rel="noopener noreferrer"> https://www.widilo.es/condiciones-legales</a>
                </p>
                
                <a href="https://cutt.ly/widiloCR" className="enlaces" rel="noopener noreferrer">
                    <img loading="lazy" className="img-fluid rounded mx-auto d-block w-75 mb-4" src="../img/widilo/funcionamiento.png" alt="Funcionamiento de Widilo" />
                </a>

                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#funcionamiento" className="list-group-item list-group-item-action list-group-item-dark">
                            1. ❓ ¿De qué FORMA se gana el cashback? | Opciones de Ganarlo 💡
                        </a>
                        <a href="#sistema-referidos" className="list-group-item list-group-item-action list-group-item-dark">
                            2. 👋 Sistema de Referidos en Widilo 💸
                        </a>
                        <a href="#sistema-bonos" className="list-group-item list-group-item-action list-group-item-dark">
                            3. ✅ Sistema de Bonificaciones por comprar con Widilo 🥰
                        </a>
                        <a href="#otras-formas" className="list-group-item list-group-item-action list-group-item-dark">
                            4. ✅ Otras formas con las que ganar cashback 💸
                        </a>
                        <a href="#como-retirar" className="list-group-item list-group-item-action list-group-item-dark">
                            5. 🧐 ¿Comó retirar en Widilo? | Métodos de Pago 💳
                        </a>
                        <a href="#pago-widilo" className="list-group-item list-group-item-action list-group-item-dark">
                            6. 💸 ¿Widilo PAGA? | Fiable, ¿sí o no? 🤗
                        </a>
                    </div>
                </div>

                <div id="funcionamiento">
                    <h3 className="h5 text-danger mt-4 mb-4">❓ ¿De qué FORMA se gana el cashback? | Opciones de Ganarlo 💡</h3>
                    <p className="text-justify">
                        Tenemos dos opciones para recibir el cashback por comprar en las diferentes tiendas disponibles en esta plataforma.
                    </p>
                    <ol>
                        <li>
                            🥇 Ir a la tienda deseada y pulsar en el botón de "Activar Cashback" al acceder a esta.
                        </li>
                        <li>
                            🥈 Usar la propia extensión de la plataforma, disponible para los navegadores de Chrome, Firefox, Opera, Brave, etc. <br />
                            <strong>(En todos los navegadores actuales está disponible esta extensión)</strong>
                        </li>
                    </ol>
                    <div className="alert alert-info enlaces" role="alert">
                        Si quieres ver más información acerca del funcionamiento de la extensión de Widilo 👉 
                        <a href="https://www.widilo.es/extension" target="_blank" rel="noopener noreferrer"> pulsa aquí</a> 
                    </div>
                </div>

                <div id="sistema-referidos">
                    <h3 className="h5 text-danger mt-4 mb-4">👋 Sistema de Referidos en Widilo 💸</h3>
                    <img loading="lazy" className="img-fluid rounded mx-auto d-block w-75 mb-4" src="../img/widilo/referidos.webp" alt="Referidos de Widilo" />
                    <p className="text-justify">
                        En la imagen podéis ver el sistema de referidos que posee Widilo, 
                        por cada amigo que traigas, ganas 3€ cuando este, realize su primera compra. <br /><br/>
                        (Además si os registráis ahora obtenéis 5€ al hacer vuestra primera compra + 1€ 
                        por DESCARGAR la Extensión para activar el cashback más fácilmente 🔥)
                    </p>
                    <a className="btn btn-outline-success mb-4" href="https://cutt.ly/widiloCR" target="_blank" rel="noopener noreferrer">
                        ¿A qué esperas? Únete a Widilo y ahorra con tus compras 👋💳
                    </a>
                </div>

                <div id="sistema-bonos">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Sistema de Bonificaciones por comprar con Widilo 🥰</h3>
                    <img loading="lazy" className="img-fluid rounded mx-auto d-block w-75 mb-4" src="../img/widilo/beneficios.webp" 
                        alt="Métodos de retiro" />
                    <p className="text-justify">
                        Aquí veís los beneficios que podemos conseguir por comprar con la extensión activa de Widilo. <br/>
                        Empezamos con un estado Bronce y a medida que vayamos generando cashback por nuestras compras, podremos subir de nivel
                    </p>
                    <ol>
                        <li>
                            Bronze: Por el cashback generamos un 25%, por escribir una opinión al realizar una compra en un comercio
                            ganamos 0,10€ y por cada amigo que traigamos a Widilo 3€
                        </li>
                        <br/>
                        <li>
                            Silver: Lo tenemos disponible desde 25€ ganados de cashback, generamos un 50%, 
                            por escribir una opinión al realizar una compra en un comercio ganamos 0,15€ y por cada amigo que traigamos a Widilo 4€
                        </li>
                        <br/>
                        <li>
                            Gold: Lo tenemos disponible desde 50€ ganados de cashback, generamos un 75%, por escribir una opinión al realizar una compra en un comercio
                            ganamos 0,20€ y por cada amigo que traigamos a Widilo 5€
                        </li>
                        <br/>
                        <li>
                            Platinium: Lo tenemos disponible desde 25€ ganados de cashback, generamos un 100%, por escribir una opinión al realizar una compra en un comercio
                            ganamos 0,25€ y por cada amigo que traigamos a Widilo 6€
                        </li>
                    </ol>
                </div>

                <div id="otras-formas">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Otras formas con las que ganar cashback 💸</h3>
                    <img loading="lazy" className="img-fluid rounded mx-auto d-block w-75 mb-4" src="../img/widilo/widilove.webp" alt="Widilove" />
                    <p className="text-justify enlaces">
                        Esta es otra de las formas con las que podemos ganar 💰 en Widilo. <br/>
                        El proceso es muy sencillo, se elige una tienda y se crea el link. Sirve de mucho ya que si lo pones en redes sociales, 
                        puedes hacer que en vez de que las personas que entren EJ: Aliexpress pueden entrar a través de tu enlace y tú ganar dinero gracias a él. <br/> <br/>
                        * Si quieres ver más información acerca de WidiLove 👉 
                        <a href="https://support.widilo.com/hc/es/sections/360004419499" target="_blank" rel="noopener noreferrer"> https://support.widilo.com/hc/es/sections/360004419499 </a>
                    </p>
                    <a className="btn btn-outline-success mb-4" href="https://cutt.ly/widiloCR" target="_blank" rel="noopener noreferrer">
                        Regístrate y recibe 5€ gratis por hacer tu primera compra 🤑
                    </a>
                </div>

                <div id="como-retirar">
                    <h3 className="h5 text-danger mt-4 mb-4">🧐 ¿Comó retirar en Widilo? | Métodos de Pago 💳</h3>
                    <p className="text-justify enlaces">
                        Se puede retirar el dinero ganado o cashback cuando se llegue a la cantidad de 15€ acumulados, 
                        se solicita a través de este enlace: 
                        <a href="https://www.widilo.es/mi-perfil/mis-pagos" target="_blank" rel="noopener noreferrer"> https://www.widilo.es/mi-perfil/mis-pagos</a>
                        <br />
                        (El menú de pagos del perfil de cada uno ✅)
                    </p>
                    <div className="alert alert-danger mt-4" role="alert">
                        Se puede retirar tanto por Transferencia Bancaria (Banco) o a través de PayPal.
                        <br /><br />
                        ❗ Tener en cuenta que al retirar por primera vez se tiene que hacer OBLIGATORIAMENTE por Transferencia Bancaria, al retirar por segunda vez
                        ya se podría retirar a PayPal 🥰
                    </div>
                </div>

                <div id="pago-widilo">
                    <h3 className="h5 text-danger mt-4 mb-4">💸 ¿Widilo PAGA? | Fiable, ¿sí o no? 🤗</h3>
                    <p className="text-justify">
                        Bueno llegó el momento que todos estaban esperando, saber si REALMENTE Widilo PAGA 🔥💸 <br /><br />
                        Os pongo en situación, llegué a 15€ para retirar por primera vez y me dispuse a ingresar los datos de mi cuenta bancaria 🏦 <br /><br />
                        Ordené la transferencia el Martes 18 de Mayo y se me aceptó el Jueves 21, por lo que la transferencia me llegó el Lunes, 
                        es decir ha tardado en pagar 6 días (no llega a una semana jeje 🥳🥳) <br /><br />
                        Por aquí abajo os enseño el comprobante, para que veáis que es totalmente Fiable y Transparente por mi parte 🤗
                    </p>
                    <img   
                        loading="lazy" 
                        className="img-fluid rounded mx-auto d-block w-50 mb-4" 
                        src="../img/widilo/pago_transferencia.webp"
                        alt="Pago Widilo | Transferencia Bancaria 🎁" 
                    />
                    <p className="text-justify">
                        Como se puede ver, me llegó 15,40€ a mi cuenta de Rebellion por parte de Widilo, en este caso pone que el que envía es "Afiliza",
                        pero todos ustedes saben que pertence a Widilo, porque es el propietario del propio sitio, 
                        lo digo porque lo han podido leer al principio 😅
                    </p>
                    <h4 className="h6 text-danger">Segundo Pago a través de PayPal ✅</h4>
                    <p className="text-justify">
                        Además de la prueba de la transferencia bancaria, os pongo por aquí el comprobante de pago que pedí 20/12/2021
                        a través de PayPal, ya que la primera retirada tiene que ser por Transferencia Bancaria y 
                        a partir de la segunda como el usuario quiera 🥳
                    </p>
                    <img   
                        loading="lazy" 
                        className="img-fluid rounded mx-auto d-block mb-4" 
                        src="../img/widilo/pago-paypal.png"
                        alt="Pago Widilo | PayPal 🎁" 
                    />
                </div>
            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="h5 text-danger">⚡ Otras plataformas de cashback ⚡</h3>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras plataformas de cashback que he probado y que recomiendo ✅
                        </p>
                        <ul className="enlaces">
                            <li className="fw-bold">
                                <a href="https://cutt.ly/widiloCR" target="_blank" rel="noopener noreferrer">
                                    🥇 Widilo: La segunda mejor 🎁
                                </a>
                            </li>
                            <li className="fw-bold">
                                <a href="https://cutt.ly/igraalcashCR" target="_blank" rel="noopener noreferrer">
                                    🥈 Igraal: Subidas del cashback todos los días 🎁
                                </a>
                            </li>
                            <li className="fw-bold">
                                <a href="https://cutt.ly/berubycashCR" target="_blank" rel="noopener noreferrer">
                                    🥉 Beruby: Encuestas y otros beneficios 🎁
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}