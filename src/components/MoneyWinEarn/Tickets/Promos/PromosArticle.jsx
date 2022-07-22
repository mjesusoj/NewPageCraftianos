import React from 'react';

export const PromosArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">Promos APP 🎁 - Cupones válidos en cualquier supermercado</h1>
                <h2 className="h4 text-primary mb-4">Gana dinero comprando tus productos favoritos 💖</h2>
                <p className="text-justify enlaces">
                    Promos es una app con la que podemos ganar dinero con tickets de compra, 
                    una cosa que me gusta bastante es que hay bastantes promociones de productos sin marca. <br />
                    El servicio en cuestión es propiedad de la empresa "Promos Cupones Digitales S.L". <br />
                    Está disponible solo para España actualmente y se puede descargar tanto en Android como en iOS. <br /><br />
                    Podeís ver toda la información sobre Promos App, además de los Términos y Condiciones aquí 👇
                    <a className="" href="https://www.promosapp.es/terminos-y-condiciones" target="_blank" rel="noopener noreferrer"> 
                        https://www.promosapp.es/terminos-y-condiciones
                    </a>
                </p>
            
                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#registro-promos" className="list-group-item list-group-item-action list-group-item-dark">
                            1. ✅ ¿Cómo funciona Promos?
                        </a>
                        <a href="#funcionamiento-promos" className="list-group-item list-group-item-action list-group-item-dark">
                            2. ✅ ¿Cómo obtener el cashback?
                        </a>
                        <a href="#retiro-promos" className="list-group-item list-group-item-action list-group-item-dark">
                            3. ✅ ¿Qué hay que hacer para retirar?
                        </a>
                        <a href="#comprobante-promos" className="list-group-item list-group-item-action list-group-item-dark">
                            4. ✅ Comprobantes de Transferencia | ¿Es FIABLE Promos App?
                        </a>
                    </div>
                </div>

                <div id="registro-promos">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo registrarse en Promos App? | Formas de Registro</h3>
                    <p className="text-justify">
                        Al descargarte la app de Promos y registrarte, lo único que hay que hacer es mirar
                        los productos que tenemos disponibles para recibir cashback, o lo que es lo mismo,
                        recibir parte del dinero que gastamos en comprar, por ejemplo: Hamburguesas,
                        la cual recibimos 1€ de algo más de 3€ que nos cuesta. <br /> <br />
                        Al realizar esto, ya podemos ir al supermercado y comprar lo que necesitamos o
                        lo que queramos probar y recibir cashback 💸 
                    </p>
                    <div className="d-grid gap-2">
                        <strong>
                            IMPORTANTE: Es muy importante el conservar el ticket de compra,
                            ya que sin él no recibimos el cashback.
                        </strong>
                    </div>
                    <p className="text-justify">
                        Teniendo el ticket de compra, seleccionamos los productos que hemos comprado desde la app y
                        cuando hayamos hecho este paso, subimos el ticket. <br /> <br />
                        <i>Ahora solo hace falta esperar a que nos validen el ticket y recibamos el importe solicitado.</i>
                    </p>
                    {/* <div className="alert alert-warning">
                        RECOMENDACION: Subir el primer ticket desde la Página Web y más tarde 
                        descargar desde la Play Store / App Store 
                    </div> */}
                </div>

                <div id="funcionamiento-promos">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo se hace para recibir el cashback?</h3>
                    <p className="text-justify">
                        Al subir el ticket, nos da la opción de elegir cantidad de productos que hemos comprado si es posible, 
                        cuando hayamos terminado, aparecen los productos con el importe solicitado en el menú de saldo,
                        como se ve en esta imagen 👇
                    </p>
                    <a className="btn btn-outline-info mt-2 mb-4" href="http://bit.ly/promosCR" target="_blank" rel="noopener noreferrer">
                        Descarga la app desde aquí y empieza a recibir dinero por comprar 🛒
                    </a>
                    <p className="text-justify">
                        <strong>No olvides de introducir mi código: ULXIXW al registrarte, subir el primer ticket y recibir 1,50€ 🤯🤑🤑 </strong>
                    </p>
                </div>

                <div id="retiro-promos">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Qué hay que hacer para retirar?</h3>
                    <p className="text-justify">
                        Para retirar el cashback, tenemos que llegar a la cantidad de 10€, 
                        actualmente solamente se puede retirar por transferencia bancaria, 
                        os dejo por aquí el proceso para solicitarlo ⚡👇
                    </p>
                    <div id="carousel" className="carousel slide mt-4 mb-4" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                            <li data-target="#carousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img loading="lazy" className="rounded mx-auto d-block w-50" src="../img/promos/saldo_inicial.png" 
                                    alt="Saldo Inicial en Promos" title="Saldo Inicial en Promos"/>
                            </div>
                            <div className="carousel-item">
                                <img loading="lazy" className="rounded mx-auto d-block w-50" src="../img/promos/datos_bancarios.png" 
                                    alt="Indicar datos bancarios en Promos" title="Indicar datos bancarios en Promos"/>
                            </div>
                            <div className="carousel-item">
                                <img loading="lazy" className="rounded mx-auto d-block w-50" src="../img/promos/transferencia_solicitada.png" 
                                    alt="Transferencia solicitada en Promos" title="Transferencia solicitada en Promos"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-justify">
                        Las imágenes están ordenadas paso por paso, es decir que cuando retiremos el cashback, (si es la primera vez),
                        nos preguntará por los datos bancarios, veasé en la segunda imagen, al introducirlos, 
                        nos aparecerá la confirmación de la transferencia solicitada, 
                        y ya solo tendremos que esperar a que nos llegué a la cuenta del banco.
                    </p>
                </div>

                <div id="comprobante-promos">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ Comprobantes de Pagos | ¿Es FIABLE Promos?</h3>
                    <p className="text-justify enlaces">
                        Os dejo por aquí el comprobante de la transferencia realizada a mi cuenta de 
                        <a href="/banco-movil-pagos/"> Rebellion</a>
                    </p>
                    <img loading="lazy" className="rounded mx-auto d-block w-50" src="../img/promos/transferencia_promos.png" 
                        alt="Comprobante de Pago de Promos" title="Comprobante de Pago de Promos" />
                    <div className="alert alert-warning mt-4">
                        Si os registráis en Promos App, podeís ganar 0,50€ gracias a mí código: <b>ULXIXW</b> <br/>
                        Al final en total es 1,50€, ya que hay una promo por subir vuestro primer ticket.
                    </div>
                </div>

            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="h5 text-danger">⚡ Otras apps para ganar con tickets ⚡</h3>
                        <p className="text-justify ">
                            Aquí os dejo un listado de otras plataformas de cashback que he probado y que recomiendo ✅
                        </p>
                        <ul className="enlaces">
                            <li className="">
                                <a href="https://bit.ly/promosCR" target="_blank" rel="noreferrer">
                                    🥇 PromosApp: Usa mi código: ULXIXW para ganar tus primeros € 🤩
                                </a>
                            </li>
                            <li className="">
                                <a href="https://bit.ly/geltTicketsCR" target="_blank" rel="noreferrer">
                                    🥈 Gelt: Una de las que más gusta al mundo, únete y gana muuuchoo dinero 💖
                                </a>
                            </li>
                            <li className="">
                                <a href="https://cutt.ly/berubycashCR" target="_blank" rel="noreferrer">
                                    🥉 Shoppix: Cualquier ticket y no hay enlace de afiliados (por ahora)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}