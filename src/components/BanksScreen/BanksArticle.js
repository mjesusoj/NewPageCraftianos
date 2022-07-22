import React from 'react';
import { Link } from 'react-router-dom';

export const BanksArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 article">
                <h1 className="h3 text-primary d-grid mb-4">Bancos móviles y pagos 🏦</h1>
                <h2 className="h4 text-primary">Mejores bancos online sin comisiones ✅</h2>
                <p className="text-justify">
                    En esta sección os especifico cuales son los mejores bancos online, sin comisiones, sin tener que asociar la nómina,
                    además os explico como abrirse cuentas en todos ellos y mi opinión 🤗 (con mucho tiempo usandolo cada uno)
                </p>

                <div className="vivid-money card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title" id="vivid-money">🥇 Vivid Money: El Banco que devuelve dinero 💸</h3>
                        <p className="card-text">
                            Vivid Money es un neobanco alemán, el cual tiene muchas ventajas frente a los tradicionales o incluso a otros bancos online, 
                            porque este ofrece 1 Mes de SUPERVENTAJAS con las que puedes ganar dinero 
                            a la vez que compras en determinados comercios ✅💸 <br /><br />
                            También están las ventajas del Plan Prime, que dan cashback en Netflix, Spotify, Youtube Premium, Amazon Prime, etc 🔥
                        </p>
                        <Link className="btn btn-outline-success d-grid mb-4" exact to="/vivid-money/">
                            Mira más información sobre Vivid Money 💜
                        </Link>
                        <p className="text-justify">
                            <b>Ejemplo:</b> 
                            Hace unas semanas sacaron SUPER VENTAJAS en Carrefour y se podía obtener un 13% de cashback,
                            por lo que si se hace una compra de 50€, nos dan 6,5€ de cashback, que van a un espacio de acciones 
                            (podemos escoger cualquier compañía en la que recibir acciones 
                            y a partir del cashback que tengamos disponibles en ese espacio, podemos ganar más dinero, NO MENOS 💡)
                        </p>
                    </div>
                </div>

                <div className="rebellion card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title" id="rebellion">🥈 Rebellion: El banco de los jóvenes y no tanto 😅</h3>
                        <p className="card-text">
                            Con Rebellion puedes abrir una cuenta desde los 14 años 
                            (siempre con la autorización de los padres y/o tutores legales)
                            Es uno de los bancos que más rápido se puede abrir la cuenta y la interfaz más simplificada 👋 <br /><br />
                            Disfruta de todas las ventajas de un banco móvil, además de obtener a nuestra disposición una sección llamada
                            "promos", en la que podemos disfrutar de estas, como actualmente la de "Llena tu Nevera", 
                            que devuelve un 5% de la compra realizada en 7 supermercados distintos de España. <br /><br />
                            (Algunos de estos son: Carrefour, Lidl, Mercadona, Alcampo, etc) ✅💸
                        </p>
                        <a className="btn btn-outline-success d-grid mb-4" href="https://bit.ly/rebellionCR"  rel="noopener noreferrer">
                            Únete a Rebellion y aprovecha las promos desde ya 🚀⚡
                        </a>
                        <p className="text-justify">
                            <b>Opinión Personal:</b> 
                            Es uno de los mejores bancos online sin comisiones, para mí el segundo mejor porque
                            el registro es muy rápido, además de que se puede abrir cuenta desde los 14 años 🔥 <br /><br />
                            También indicar que la sección de "Promos o Rebel + (Anteriormente llamada)",
                            es lo que hace que las personas abran cuenta en Rebellion 🥳
                        </p>
                    </div>
                </div>

                <div className="n26 card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title" id="n26">🥉 N26: Banco online sin comisiones 🔴</h3>
                        <p className="card-text">
                            Banco móvil con el que podremos tener nuestra cuenta bancaria, con IBAN Español,
                            obtener una tarjeta de débito gratuita (Virtual y Física) y la posibilidad de retirar 5 veces 
                            de forma gratuita de CUALQUIER CAJERO al mes 🏦💸
                        </p>
                        <a className="btn btn-outline-success d-grid mb-4" href="https://cutt.ly/n26CR"  rel="noopener noreferrer">
                            Únete a N26 y gana 5€ al hacer tu primera compra ✅
                        </a>
                        <p className="text-justify">
                            <b>Opinión Personal:</b> 
                            Después de estar usando N26 como banco principal durante más de un año, 
                            puedo decir que es uno de los mejores banco para tener tu cuenta, 
                            ya que como no hay comisiones y como tampoco hay que pagar sucursales, eso gusta más jeje 🥰 
                            En definitiva te recomiendo que abras una cuenta en N26, porque cuando lleves unos meses, 
                            verás que es mejor que otros bancos tradicionales 🎉
                        </p>
                    </div>
                </div>

                <div className="verse card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title" id="verse-app">🦄 Verse App: La mejor plataforma de pagos móviles 💳</h3>
                        <p className="card-text enlaces">
                            <b>Verse App es una aplicación de pagos móviles instántaneos (disponible en Android e iOS)</b>,
                            con la que podremos enviar DINERO a amigos, familiares o conocidos, totalmente rápido y sin ninguna comisión. 
                            <br /><br />
                            El registro es muy fácil, solo hay que indicar un número de teléfono, email, cuando los hayas hecho, 
                            añades mi código: <b><i>BJNQ8R</i></b>, luego añades 1€, los mueves a algún amigo que tenga Verse, 
                            o incluso a mi y te los devuelvo (pero antes sugiero que me escribas en Instagram antes de registrarte).
                            <br /><br />
                            Finalmente verificas la cuenta con la documentación y en ese momento cada uno habrá ganado 5€ FREE 💫🤯
                        </p>
                        <Link className="btn btn-outline-success d-grid mb-4" exact to="/verse-app/">
                            Mira más información sobre Verse y únete conmigo 🤗💫
                        </Link>
                        <p className="text-justify">
                            Recuerda poner mi código: BJNQ8R en el apartado de Cuenta/Promoción,
                            porque por el contrario no podrás ganar 5€ gratis.
                            Recomiendo mucho esta app, porque sirve para tu día a día, puedes pagar a tus amigos, 
                            ganar dinero con juegos divertidos y mentales también, crear grupos y mucho más 😍😍
                        </p>
                        <div className="alert alert-info">
                            Hace poco sacaron una nueva función, con la que podremos ahorrar dinero ya sea para viajes, comprar productos, etc.
                            Se llama "Verse Wallets" y puedes pasar dinero de tu cuenta de Verse a un fondo, 
                            para que puedas ahorrar para eso que tanto quieres 🤯👏
                        </div>
                    </div>
                </div>

                <div className="plazo card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title" id="plazo">💳 Plazo: Banco online sin comisiones y con descuentos 💸</h3>
                        <p className="card-text">
                            Es un banco online que ha salido hace poco y que nos ofrece una cuenta bancaria sin comisiones, 
                            tarjeta virtual y física gratuita de débito. Y la mejor ventaja por la que abrirse cuenta en Plazo es que
                            dan hasta 30€ al mes por comprar en todos los supermercados (válido 90 días después de activar la tarjeta).
                            <br /><br />
                            Además en poco tiempo sacarán que por pagar algunos comercios que forman de su programa de ofertas, dan descuentos 🤗
                        </p>
                        <a className="btn btn-outline-success d-grid mb-4" href="https://bit.ly/plazoCR"  rel="noopener noreferrer">
                            Mira más información sobre Plazo y descargala para Android e iOS 🤗
                        </a>
                        <p className="text-justify">
                            Abrir la cuenta es muy sencillo, solo se necesita especificar el e-mail y contraseña, 
                            número de teléfono para asociarlo a la cuenta por si hay algún problema, clave de acceso para acceder fácilmente 
                            y finalmente verificar la cuenta con la documentación.
                            <br /><br />
                            Al hacer esto ya solo tienes que introducir mi código: UF4E06 en el apartado que dice "Código Promocional" y 
                            luego aparecerá una ventana en la que dice "¡Código Promocional aplicado correctamente! y 
                            tienes 6 días para hacer la primera compra de 20€ y recibir 10€ GRATIS (esto según los días desde que abriste la cuenta)" 
                            y lo que queda sería ingresar dinero a la cuenta 💡✅
                        </p>
                    </div>
                </div>

                <div className="zelf card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title" id="zelf">🤑 Zelf: Banco por aplicaciones de mensajería 🤯</h3>
                        <p className="card-text">
                            Zelf es un banco mega-rápido a través de aplicaciones de mensajería, como pueden ser
                            (Whatsapp, Telegram, Facebook Messenger), con el que podremos obtener una tarjeta virtual con 5€ gratis al unirnos.
                            Por cada referido se gana 5€ para cada uno, además de ganar más dinero al usar la tarjeta por primera vez y mucho más aquí 👇
                        </p>
                        <a className="btn btn-outline-success d-grid mb-4" href="https://cutt.ly/zelfbnkCR">
                            Únete a Zelf y gana 5€ al instante 💸👋
                        </a>
                        <p className="text-justify">
                            💥 Si eres de España o Francia, en el momento del registro y de pedir la tarjeta, la puedes obtener 💳🔥
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="h5 card-title">⚡IMPORTANTE⚡</h2>
                        <p className="text-justify">
                            Si teneís alguna pregunta, o alguna duda sobre esto o en general,
                            me podeís escribir en mis redes sociales:
                        </p>    
                        <ul className="enlaces">
                            <li className="">
                                <a href="http://bit.ly/ingCraftianos" target="_blank" rel="noreferrer">
                                    Instagram | Mi cuenta principal 📘🖋️
                                </a>
                            </li>
                            <li className="">
                                <a href="http://bit.ly/twCraftianos" target="_blank" rel="noreferrer">
                                    Twitter | Mi segunda cuenta 📘🖋️
                                </a>
                            </li>
                            <li className="">
                                <a href="https://bit.ly/channelCR" target="_blank" rel="noreferrer">
                                    Canal de Telegram 🦄 | Aquí podrás encontrar todos los enlaces que voy publicando, etc 💫
                                </a>
                            </li>
                            <div className="email-contacto mt-4">
                                Aunque también me puedes escribir a mi correo electrónico 👇
                                <img loading="lazy" src="../img/otros/email-craftianos.png" 
                                    className="figure-img img-fluid rounded mt-2" alt="Email de Craftianos"/>
                            </div>
                        </ul>
                        <p className="text-justify">
                            La mejor promo que hay es la de Verse, por aquí tenéis mi código y el enlace 👇✨
                        </p>
                    </div>
                </div>
                <div className="bannerVerse col-10 ms-5">
                    <a href="https://bit.ly/VerseCR" target="_blank" rel="noreferrer">
                        <img className="img-fluid rounded mx-auto d-block w-100 mt-4" src="../img/verse/banner-ing.jpg" 
                            alt="Registrate a Verse y consigue 5€ GRATIS" loading="lazy" />
                    </a>
                </div>
            </div>
        </>
    )
}