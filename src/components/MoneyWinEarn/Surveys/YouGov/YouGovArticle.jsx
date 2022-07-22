import React from 'react';

export const YouGovArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">📙 YouGov</h1>
                <h2 className="h4 text-primary mb-4">✅ Da tu opinión y recibe dinero extra 🔥</h2>
                <p className="text-justify">
                    YouGov es una empresa líder mundial en investigación de mercados, fue fundada en el Reino Unido en
                    el año 2000. <br/>
                    Opera en todo el mundo con sedes en Europa, América del Norte, América del Sur y Asia. <br />
                </p>

                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#ventajas-youGov" className="list-group-item list-group-item-action list-group-item-dark">
                            1. 🥇 Ventajas y Desventajas de YouGov
                        </a>
                        <a href="#sistema-referidos" className="list-group-item list-group-item-action list-group-item-dark">
                            2. 🥈 Sistema de Referidos
                        </a>
                        <a href="#premios-youGov" className="list-group-item list-group-item-action list-group-item-dark">
                            3. 🥉 ¿Cuáles son los premios disponibles?
                        </a>
                    </div>
                </div>

                <div id="ventajas-youGov">
                    <h3 className="h5 text-danger mt-4 mb-4">🥇 Ventajas y Desventajas de YouGov</h3>
                    <p className="text-justify">
                        Aquí os dejo algunas ventajas sobre usar YouGov y desventajas:
                    </p>
                    <ol className="fw-bold">
                        <li>
                            Las encuestas se pueden realizar desde la página web y 
                            desde la app disponible para Android e iOS ✔🤳
                        </li>
                        <li>
                            Hay muy poca probabilidad de que te expulsen de una encuesta 👍
                        </li>
                        <li>
                            Estudios cortos y frecuentes 👏
                        </li>
                        <li>
                            Buen sistema de referidos, el recomendador gana 100pts adicionales, 
                            al completar el recomendado sus primeras 5 encuestas.
                        </li>
                    </ol>
                </div>

                <div id="sistema-referidos">
                    <h3 className="h5 text-danger mt-4 mb-4">🥈 Sistema de Referidos</h3>
                    <p className="text-justify">
                        Este es el sistema de referidos que tiene YouGov 👇😊
                    </p>
                    <img loading="lazy" className="img-fluid rounded mx-auto d-block mt-4 mb-4" src="../img/yougov/sistema_referidos.png" 
                        alt="Sistema de referidos de YouGov" title="Sistema de referidos de YouGov"/>
                    <p className="text-justify">
                        El recomendador gana 200pts por cada amigo que se registra en YouGov, 
                        cuando el referido realize 5 encuestas después de hacer las iniciales.
                    </p>
                </div>

                <div id="premios-youGov">
                    <h3 className="h5 text-danger mt-4 mb-4">🥉 ¿Cuáles son los premios disponibles?</h3>
                    <p className="text-justify">
                        Estos son los premios que están disponibles en este momento, hace poco sacaron la opción de retirar por Transferencia Bancaria 🤗
                    </p>
                    <div id="carouselYouGov" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselYouGov" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselYouGov" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img loading="lazy" src="../img/yougov/premios1.png" class="img-fluid rounded mx-auto d-block mt-4 mb-4" 
                                    alt="Premios disponibles en YouGov 1" />
                            </div>
                            <div class="carousel-item">
                                <img loading="lazy" src="../img/yougov/premios2.png" class="img-fluid rounded mx-auto d-block mt-4 mb-4" 
                                    alt="Premios disponibles en YouGov 2" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselYouGov" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselYouGov" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <p className="text-justify">
                        Están bastante bien, ya que por cada encuesta ofrecen la cantidad de puntos acorde al tiempo invertido, 
                        entre otros factores, además de la cantidad de encuestas que envían.
                        De hecho en 1 semana he recibido una encuesta por día, debido a que por 10 encuestas completadas me
                        daban 250pts. <br /><br />
                        
                        Si quieren empezar a ganar puntos, para después canjear 👇👋
                    </p>
                </div>
                
                <a className="btn btn-outline-success mb-4" href="https://bit.ly/yougovCR" target="_blank" rel="noopener noreferrer">
                    Regístrate en YouGov y empieza a ganar dinero 🤑
                </a>
            </div>

            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="h5 text-danger">⚡ Otras plataformas de encuestas ⚡</h4>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras páginas de encuestas que podrían interesarle.
                        </p>

                        <ul className="enlaces">
                            <li className="fw-bold">
                                Ipsos Isay
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    )
}