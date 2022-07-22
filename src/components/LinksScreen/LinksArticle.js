import React from 'react';
import { Link } from 'react-router-dom';

export const LinksArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 article">
                <div className="card">
                    <div className="card-body">
                        <h1 className="h4 text-primary mb-4">Enlaces de @craftianosmoney</h1>
                        <h2 className="h5 card-title">Plataformas de Encuestas 📗</h2>
                        <ul className="enlaces encuestas">
                            <li className="">
                                I-Say: 
                                <Link exact to="/ipsos-isay/" title="Mira más información de Ipsos Isay"> 
                                    Una de las mejores Plataformas de Encuestas (envían MUCHAAS 🥳)
                                </Link>
                            </li>
                            <li className="">
                                YouGov: 
                                <Link exact to="/yougov/" title="Mira más información sobre YouGov"> 
                                    Segunda mejor plataforma (También envían muchas Encuestas)⚡
                                </Link>
                            </li>
                            <li className="">
                                PrizeRebel:
                                <Link exact to="/prize-rebel/" title="Mira más información sobre Prize Rebel">
                                    Cuenta con un mágnifico sistema de referidos y programa de fidelidad 👏
                                </Link>
                            </li>
                            <li className="">
                                MarketAgent:
                                <Link exact to="/marketagent/" title="Mira más información sobre MarketAgent"> 
                                    Otro portal de Encuestas y la plataforma está Actualizada! 🔥
                                </Link>
                            </li>
                            <li className="">
                                SwagBucks: 
                                <a href="https://cutt.ly/swagbucksCR" target="_blank" rel="noopener noreferrer"
                                    title="Regístrate en SwagBucks y Gana Dinero">
                                        Plataforma de encuestas, juegos y mucho más |
                                        Disponible para todo los PAISES ✅
                                </a>
                            </li>
                            <li className="">
                                Maximiles:
                                <a href="https://bit.ly/maximilesCR" target="_blank" rel="noopener noreferrer"
                                    title="Regístrate en Maximales y Gana Regalos 🎁">
                                        NUEVA PLATAFORMA DE ENCUESTAS 🎉 | Disponible SOLO en Europa
                                </a>
                            </li>
                        </ul>
                        <h3 className="h6 card-title">Apps de Encuestas (Disponible en Android & iOS)</h3>
                        <ul className="enlaces encuestas">
                            <li className="">
                                AttaPoll:
                                <Link exact to="/attapoll/" title="Mira más información sobre AttaPoll">
                                    La mejor app para ganar dinero con encuestas 🤯
                                </Link>
                            </li>
                            <li className="">
                                SmartmeApp:
                                <Link exact to="/smartme-app/" title="Mira más información sobre SmartmeApp">
                                    Encuestas cortas y mucho más beneficios 😎
                                </Link>
                            </li>
                            <li className="">
                                PollPay:
                                <Link exact to="/pollpay/" title="Mira más información sobre PollPay">
                                    La mejor app para ganar con tus amigos ⚡
                                </Link>
                            </li>
                        </ul>
                        <h2 className="h5 card-title">Plataformas de Cashback 🛒</h2>
                        <ul className="enlaces cashback">
                            <li className="">
                                LetyShops: 
                                <Link exact to="/letyshops/" title="Mira más información sobre LetyShops">
                                    La mejor plataforma de cashback,
                                    gana 5€ al hacer tu primera compra superior a 30€ 🥇
                                </Link>
                            </li>
                            <li className="">
                                Widilo:
                                <Link exact to="/widilo/" title="Mira más información sobre Widilo">
                                    La segunda mejor plataforma,
                                    sirve de complemento a LetyShops. 🥈
                                </Link>
                            </li>
                            <li className="">
                                Igraal:
                                <Link exact to="/igraal/" title="Mira más información sobre Igraal">
                                    Cada día suben el cashback en tiendas, gana 3€ por la primera compra + 1€ por la extensión 💡
                                </Link>
                            </li>
                            <li>
                                Picodi (NUEVA PLATAFORMA disponible en España 🚀, entre otros PAISES): 
                                <a href="https://cutt.ly/picodiCR" target="_blank" rel="noopener noreferrer" 
                                    title="Únete a Picodi y obtén 4€ TOTALMENTE Gratis">
                                        Obtén 4€ TOTALMENTE Gratis 🤑
                                </a>
                            </li>
                            <li className="">
                                Beruby:
                                <Link exact to="/compras-cashback/" title="Mira más información sobre Beruby">
                                    Variedad de herramientas para ganar dinero, como encuestas, ofertas, recomendaciones, etc 💎
                                </Link>
                            </li>
                            <li className="">
                                SwagBucks: 
                                <a href="https://cutt.ly/swagbucksCR" target="_blank" rel="noopener noreferrer" 
                                    title="Regístrate en SwagBucks y Gana Dinero Con Tus Compras 🎁">
                                        Posee también un sistema de cashback,
                                        además de poder ganar dinero por encuestas, etc 💡
                                </a>
                            </li>
                            <br/>
                            <div className="">
                                EJ: En este momento, en LetyShops no nos devuelven cashback por comprar en Ebay,
                                en este caso Widilo nos devuelve el 4% del total de nuestra compra. 🧐
                                <br/>
                                Además la app de SmartmeApp, posee un "club smartme", 
                                por lo que también podemos recibir cashback por nuestras compras, teneís el link arriba ☝☝😍
                            </div>
                        </ul>
                        <h2 className="h5 card-title">Ganar DINERO por TICKETS DE SUPERMERCADO 🛒</h2>
                        <ul className="enlaces list-custom">
                            <li className="">
                                Promos App:
                                <Link exact to="/promos-app/" title="Mira más información sobre PromosAPP">
                                    La mejor app para ganar cashback por tickets de compra en supermercados 🛒
                                </Link>
                            </li>
                            <li className="">
                                Tiendeo:
                                <Link exact to="/tiendeo/" title="Mira más información sobre Tiendeo">
                                    ACTUALMENTE la mejor app para recibir cashback por tickets 👌💫
                                </Link>
                            </li>
                            <li className="">
                                Gelt:
                                <a href="https://cutt.ly/geltTicketsCR" target="_blank" rel="noreferrer" 
                                    title="Regístrate en Gelt y Gana Dinero Con Tus Tickets">
                                        Muchísimas promociones en las que ganar MUCHO dinero 🤯💎
                                </a>
                            </li>
                            <div className="mt-2">
                                Estas son algunas apps que te pueden ayudar a ganar dinero por tickets de compra en supermercados 🛒
                                <br />
                                Por comprar algunos productos, ya sean sin marca, como Manzanas, Zanahorias, etc,
                                o marcas como Alpro, Productos Realfooding, etc.
                                <br />
                                Además hay otra app que utilizo que es la de Shoppix, que permite subir cualquier ticket de compra, 
                                pero el inconveniente es que ACTUALMENTE no recogen USUARIOS NUEVOS 😓
                            </div>
                        </ul>
                        <h2 className="h5 card-title">Promociones ACTUALES 💎 | Bancos Online 🏦</h2>
                        <ul className="enlaces bancos-online">
                            <li className="">
                                N26 💫 :
                                <a href="https://cutt.ly/n26CR" target="_blank" rel="noopener noreferrer">
                                    Gana 5€ por unirte al banco móvil N26
                                </a>
                            </li>
                            <li className="">
                                Vivid Money 💜 (Uno de los mejores bancos MÓVILES ACTUALMENTE 💸):
                                <Link exact to="/vivid-money/" 
                                    title="Mira más información sobre Vivid Money y consigue dinero con tus compras 🥳">
                                    Únete y obtén cashback por TODAS TUS COMPRAS ONLINE, OFFLINE 
                                    y muchos MÁS BENEFICIOS 👏🤯
                                </Link>
                            </li>
                            <li className="">
                                Rebellion (Banco móvil):
                                <a href="https://bit.ly/rebellionCR" target="_blank" rel="noopener noreferrer" 
                                    title="Únete a Rebellion, banco online y gana dinero">
                                        Gana HASTA 5€ por UNIRTE Conmigo y Aprovecha las Promociones que hay! 🥳🥳
                                </a>
                            </li>
                            <li className="">
                                Verse (Pagos móviles y MUCHO más):
                                <Link exact to="/verse-app/" title="Mira más información sobre Verse 💙">
                                    Aprovecha y descarga Verse para hacer pagos con amigos en segundos, además
                                    de poder ganar 5€ al UNIRTE y SOLO tener que MOVER 1€ ¿te lo vas a perder? 👋💙
                                </Link>
                            </li>
                            <li className="">
                                Zelf (Banco por aplicaciones de mensajería):
                                <a href="https://cutt.ly/zelfbnkCR" target="_blank" rel="noopener noreferrer"
                                    title="Únete al mejor banco por aplicaciones y aprovecha la PROMO DE 20€ 🎁🥳">
                                        Gana 20€ GRATIS por UNIRTE al banco por aplicaciones de mensajería 👋 
                                        (Las compras SALEN GRATIS CON LOS BONOS CORREEE 🤯💫)
                                </a>
                            </li>
                        </ul>
                        <h2 className="h5 card-title">Ganar DINERO HACIENDO MULTIPLES COSAS 😃</h2>
                        <ul className="enlaces list-custom">
                            <li className="">
                                ClipClaps:
                                <a href="https://bit.ly/ClipClapsCR" target="_blank" rel="noreferrer" 
                                    title="Únete a ClipClaps">
                                        Gana dinero 💸 por ver vídeos graciosos, jugar entre otras muchas cosas 🤯
                                </a>
                            </li>
                            <li className="">
                                MistPlay:
                                <a href="https://bit.ly/mistplayCR" target="_blank" rel="noreferrer" 
                                    title="Únete a MistPlay y gana dinero jugando 🎮💸">
                                        Gana dinero 💸 jugando a múltiples juegos 🎮
                                </a>
                            </li>
                        </ul>
                        <h2 className="h5 card-title">Ahorra dinero compartiendo suscripciones a servicios</h2>
                        <ul className="enlaces list-custom">
                            <li className="">
                                Together Price:
                                <a href="https://bit.ly/togpriceCR" target="_blank" rel="noreferrer"
                                    title="Ahorra dinero por compartir suscripciones digitales con Together Price 💸😍">
                                        Comparte una suscripción con grupos y ahorra dinero 💡💸
                                </a>
                                <br />
                                * Se puede compartir cualquier servicio de Streaming (Netflix, HBO, Disney +), 
                                hasta licencia de Office <br />(Hay un sinfín de grupos en los que unirse 🥇)
                            </li>
                        </ul>
                        <h2 className="h5 card-title">Ganar DINERO CAMINANDO (Haciendo Pasos)</h2>
                        <ul className="enlaces ganar-caminando">
                            <li>
                                WeWard:
                                <a href="https://cutt.ly/wewardCR" target="_blank" rel="noopener noreferrer">
                                    Gana dinero caminando o canjea en cheques regalo 🦄
                                    (USA mi código: JESU-vXm6X para ganar un bonus)
                                </a>
                            </li>
                        </ul>
                        <h2 className="h5 card-title">Ganar DINERO Sin Hacer Nada (NO LO RECOMIENDO)</h2>
                        <ul className="enlaces">
                            <li className="">
                                ACTUALMENTE ya no recomiendo HoneyGain porque es MUY POCO rentable 🤯
                                ya que das TODA tu información y después no sabes que hacen con ella.
                                (Además llegar a los 20$ es muy costoso y es mejor hacer otras cosas que esta la verdad)
                            </li>
                            <li className="">
                                IPROYAL es en mi opinión mejor que HoneyGain, pero vamos que salvo esto estamos hablando de lo mismo,
                                cedes tus datos a personas ANÓNIMAS, porque lo digo, los creadores de las dos apps y muchas más, son ANONIMOS VAYA 🤬
                            </li>
                            <div>
                                Concluyendo, mi humilde opinión no es usar estas cosas porque no sabes que más pueden saber de ti vaya, 
                                porque mucho saben ya la gran G entre otros servicios más.
                                Por otro lado, deje tiempo de usarlo y ahora ando utilizando VPN por si acaso 
                                (pero VPN segura no de las que trafican con tus datos xd 🤬)
                            </div>
                        </ul>
                        <h2 className="h5 card-title">Ahorra y gana dinero con tus amigos 😎</h2>
                        <ul className="enlaces">
                            <li className="">
                                Plum:
                                <a href="https://bit.ly/ahplumCR" target="_blank" rel="noopener noreferrer">
                                    Ahorra dinero y sobre todo invita a amigos y gana dinero 💸 ( +15€ 🔥)
                                </a>
                            </li>
                        </ul>
                        <h2 className="h5 card-title">Gana Dinero Gratis | Gana Cryptos 💸</h2>
                        <p className="text-justify">
                            Otra forma de ganar dinero es con las criptomonedas, ya que puedes llegar a conseguir mucho beneficio,
                            si sabes del tema. Aquí os dejo algunas páginas o bots para ganarlas gratis.
                        </p>
                        <h3 className="h6 card-title">Faucets ✅</h3>
                        <ul className="enlaces list-custom">
                            <li className="">
                                Faucet Crypto
                                <a href="https://bit.ly/faucetCR" target="_blank" rel="noopener noreferrer">
                                    La mejor faucet para ganar cualquier crypto (Mínimo de retiro: 1.000 Coins) ✅🔥
                                </a>
                            </li>
                            <li className="">
                                Faucet Automáticas (Faucet Pay):
                                <ul>
                                    <li className="">
                                        <a href="https://bit.ly/faucetDogeCR" target="_blank" rel="noopener noreferrer">
                                            Doge | Gana Satoshi cada 5 min
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="">
                                        <a href="https://bit.ly/faucetTronCR" target="_blank" rel="noopener noreferrer">
                                            Tron (TRX) | Gana Satoshi cada 5 min
                                        </a>                                       
                                    </li>
                                </ul>
                                <ul>
                                    <li className="">
                                        <a href="https://bit.ly/faucetLiteCR" target="_blank" rel="noopener noreferrer">
                                            LiteCoin (LTC) | Gana Satoshi cada 5 min
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            { /* col col-md-3 offset-md-1 mb-5 */ }
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="h5 card-title">⚡IMPORTANTE⚡</h2>
                        <p className="text-justify">
                            Si teneís alguna pregunta, o alguna duda sobre esto o en general,
                            me podeís escribir en mis redes sociales:
                        </p>
                        <ul className="enlaces list-custom">
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
                    </div>
                </div>
                <div className="bannerVerse col-10 ms-5">
                    <a href="https://bit.ly/VerseCR" target="_blank" rel="noreferrer">
                        <img className="img-fluid rounded mx-auto d-block w-100 mt-4" src="../img/verse/banner-ing.jpg" 
                            alt="Únete a Verse y consigue 5€ GRATIS" title="Únete a Verse y consigue 5€ GRATIS" loading="lazy" />
                    </a>
                </div>
            </div>
        </>
    )
}