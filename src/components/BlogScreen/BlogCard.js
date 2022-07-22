import React from 'react';

export const BlogCard = ({
    title,
    description,
    image,
    link,
    date,
}) => {

    const descriptionMod = description.replaceAll(`|`, `&nbsp;`);

    return (
        <div className="card allCards mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <a href={ link }>
                        <img src={ image } className="card-img img-fluid rounded-start" alt={ title } />
                    </a>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <a href={ link }>
                            <h5 className="card-title">{ title }</h5>
                        </a>
                        <p className="card-description">{ descriptionMod }</p>
                        <small className="text-muted fw-bold ">{ date }</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
