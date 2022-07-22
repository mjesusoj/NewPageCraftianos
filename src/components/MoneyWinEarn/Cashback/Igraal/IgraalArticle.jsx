import React from 'react';

export const IgraalArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">Igraal 🎁 - Recibe dinero haciendo compras online</h1>
                <h2 className="h4 text-primary mb-4">Aumentos de cashback ¡TODOS LOS DIAS! 🤩</h2>
                <p className="text-justify">
                    iGraal es una plataforma de cashback, creada en 2006 en Francia y lleva 10 años en el mercado,
                    con más de 6 millones de usuarios. Consiguiendo ser nº 1 en Francia y nº 2 en Alemania.
                    <br /><br />
                    Podrás ver alguna que otra plataforma de cashback en mi página, pero esta es una de las mejores,
                    ya que cuenta con subidas de cashback en tiempos determinados, buen sistema de cashback y
                    atención al cliente.
                </p>
                <p className="text-justify">
                    Aquí os enseño algunas funciones que tiene iGraal en comparación con otras plataformas 👇
                </p>
                <div className="funcionamiento">
                    <ol>
                        <li className="mb-4">
                            Por ejemplo, una para destacar, sería los estados, que esto lo tienen otras plataformas, 
                            pero iGraal es diferente cuanto a esto, porque no hay que alcanzar un total de cashback acumulado,
                            si no que dan INSIGNIAS por comprar, invitar amigos, hacer opiniones, 
                            descargar la extensión (al descargarla obtenemos 1€ EN EL SALDO GRATIS 🤯)
                        </li>
                        <img loading="lazy" className="img-fluid rounded mx-auto d-block w-75 mb-4" src="../img/igraal/estados.png" 
                            alt="Estados de iGraal" title="Estados de iGraal" />
                        <li className="mb-4">
                            Obtenemos 0,20€ al escribir una opinión de una tienda en la que hemos comprado, para esto,
                            logícamente hay que comprar en esta, además de tener el cashback validado ✅
                        </li>
                        <li className="mb-4">
                            Variedad de métodos de pagos para retirar el cashback, 
                            dejo aquí una imagen en la que se muestra todos los métodos de pago 👇✅
                        </li>
                        <img loading="lazy" className="img-fluid rounded mx-auto d-block w-75 mb-4" src="../img/igraal/metodos_pago.png" 
                            alt="Métodos de Pago de iGraal" title="Métodos de Pago de iGraal" />
                        <li className="mb-4">
                            La última consideración, sería el sistema de referidos, que en este caso SE GANA 3€ al registrarse el referido,
                            y lo tendríamos disponible al validarse el 1º cashback de nuestro amigo. Otra ventaja sería que del total 
                            de ganancias de nuestros amigos, nosotros ganamos un 10% de esas ganancias 💡🤯
                        </li>
                    </ol>
                </div>
                <div className="btnRegistro mt-2">
                    <a className="btn btn-outline-info mb-2" href="https://bit.ly/igraalCashCR" target="_blank" rel="noopener noreferrer" 
                        title="Únete a Igraal y empieza a ahorrar conmigo 🥳">
                        Únete a Igraal y empieza a ahorrar conmigo 🥳
                    </a>
                </div>
                <div className="alert alert-info mt-4">
                    IMPORTANTE: Al unirse con mi enlace de referidos y registrarse, se le añade a su cuenta 3€, 
                    puedes ganar otro 1€ por descargar la extensión disponible para todos los navegadores actuales (Chrome, Firefox, Brave, etc).
                    <br /><br />
                    También se puede conseguir otro 1€ extra al realizar una encuesta que mandan a los días del registro. <br />
                    (Personalmente no me ha llegado, pero un amigo que se registró conmigo le llegó y consiguió el 1€ extra)
                </div>
                
                <div className="card">
                    <div className="card-body">
                        <h5 className="text-danger">Algunos motivos por los que iGraal es una de las mejores <b>Plataforma de Cashback</b></h5>
                        <p className="text-justify">
                            En este apartado, os voy a detallar algunos motivos, por los que iGraal en mi opinión,
                            es una de las mejores plataforma de Cashback que hay actualmente 😍👏
                        </p>
                        <ul className="otras-plataformas">
                            <li className="font-weight-bold">
                                Buena página web, ya que es muy intuitiva, al igual que un buen sistema de cashback ✅
                            </li>
                            <li className="font-weight-bold mt-2">
                                En comparación con otras plataformas, iGraal posee app para Android e iOS y extensión.
                                Lo digo porque por ejemplo con Widilo o Beruby, con la app no se puede comprar desde la app de Aliexpress,
                                tiene que ser desde la página web y eso resta porque con la app es más rápido y se ahorra mucho más 🤯
                                <br /><br />
                                (Con LetyShops también se puede comprar desde la app, la diferencia la podemos encontrar debajo 👇👇)
                            </li>
                            <li className="font-weight-bold mt-2">
                                Otra de las consideraciones a tener en cuenta para utilizar una plataforma y otra, es
                                saber cuanto nos devuelve cada plataforma en cualquier tienda. <br /><br />
                                (En mi lugar, me viene muy bien iGraal porque en Aliexpress por cada pedido hay un 3% y 
                                en LetyShops para recibir un 5% tienes que comprar algunos productos de cierta categoría y eso resta ❗ )
                            </li>
                            <li className="font-weight-bold mt-2">
                                También hay que DESTACAR que tiene un buen Sistema de Atención Al Cliente (SAC), 
                                aunque en mi caso, solo lo he tenido que utilizar una vez.
                            </li>
                            <li className="font-weight-bold mt-2">
                                Por último resaltar que cada día recibimos en nuestro correo las ofertas de ese mismo día. <br /><br />
                                Por ejemplo, si se sube el cashback en una tienda especifíca, pues estamos informados vía correo electrónico ✅
                                <br/><br/>
                                (En comparación con LetyShops esto es muy bueno, ya que con esta no se recibe las ofertas del día ⛔ , 
                                aunque en raras circunstancias, lo publican en sus RRSS) 

                                {/* A REVISAR */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="h5 text-danger">⚡ Otras plataformas de cashback ⚡</h2>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras plataformas de cashback que he probado y que recomiendo ✅
                        </p>
                        <ul className="enlaces">
                            <li className="fw-bold">
                                <a href="https://cutt.ly/letyshopsCR" target="_blank" rel="noreferrer">
                                    🥇 LetyShops: La segunda mejor 🎁
                                </a>
                            </li>
                            <li className="fw-bold">
                                <a href="https://cutt.ly/widiloCR" target="_blank" rel="noreferrer">
                                    🥈 Widilo: Subidas del cashback todos los días 🎁
                                </a>
                            </li>
                            <li className="fw-bold">
                                <a href="https://cutt.ly/berubycashCR" target="_blank" rel="noreferrer">
                                    🥉 Beruby: Encuestas y otros beneficios 🎁
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bannerIgraal mt-5" id="ig-ku4YXxn78w3YWofP">
                    <noscript> 
                        Debes habilitar javascript para ver este contenido proporcionado por 
                        <a href="https://es.igraal.com/"> iGraal : cashback y códigos de descuento </a>
                    </noscript>
                </div>
            </div>
        </>
    )
}