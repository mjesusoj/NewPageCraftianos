import React from 'react'

export const AboutArticle = () => {
    return (
        <>
            <div className="col-12 col-md-6 article">
                {/*                 <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="../">Inicio</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Redes Sociales</li>
                    </ol>
                </nav> */}
                <h1 className="h4 text-primary mb-3">🥇 Mis Redes Sociales 📲</h1>
                <figure className="figure">
                    <h2 className="h5 text-primary">✅ Instagram</h2>
                    <a href="https://bit.ly/ingCraftianos" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="../img/icons/iconInstagram.webp" 
                            className="figure-img img-fluid rounded mt-2 iconInstagram" alt="Icono de Instagram"/>
                    </a>
                    <figcaption className="figure-caption text-left mt-2">
                        Es en la red social que estoy más activo y más
                        contenido publico. Por aquí te puedo responder más rápido.
                    </figcaption>
                </figure>
                <hr/>
                <figure className="figure">
                    <h2 className="h5 text-primary">🐦 Twitter</h2>
                    <a href="https://bit.ly/twCraftianos" className="twitter-follow-button" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="../img/icons/iconTwitter.webp" className="figure-img img-fluid rounded mt-2 iconTwitter" 
                            alt="Icono de Twitter" /> 
                    </a>
                    <br/>
                    <figcaption className="figure-caption text-left mt-2">
                        Segunda red social en la que publico más contenido, 
                        aquí hablo de las novedades de esta página web y más. También me puedes preguntar aquí lo que quieras 😅
                    </figcaption>
                </figure>
                <hr />
                <figure className="figure">
                    <h2 className="h5 text-primary">✅ TikTok</h2>
                    <a href="https://bit.ly/tiktokCR" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="../img/icons/iconTiktok.webp" 
                            className="figure-img img-fluid rounded mt-2 iconTiktok" alt="Icono de Tiktok"/>
                    </a>
                    <figcaption className="figure-caption text-left mt-2">
                        Me he abierto esta red social hace poco, sigueme porque subiré muchos vídeos interesantes, 
                        que este relacionado con esta página y mi marca personal de Instagram 👏
                    </figcaption>
                </figure>
                <hr />
                <figure className="figure">
                    <h2 className="h5 text-primary">📘 Peoople</h2>
                    <a href="https://bit.ly/peoopleCR" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="../img/icons/iconPeoople.webp" 
                            className="figure-img img-fluid rounded mt-2 iconPeoople" alt="Icono de Peoople" />
                    </a>
                    <figcaption className="figure-caption text-left mt-2">
                        Sigueme en Peoople, en mi cuenta puedes ver mis recomendaciones
                        (Apps para ganar dinero, banco móvil y mucho más personal 👏).
                    </figcaption>
                </figure>
            </div>
            <div className="col col-md-3 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="h5 text-danger">⚡IMPORTANTE⚡</h2>
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
                    </div>
                </div>
            </div>
        </>
    )
}