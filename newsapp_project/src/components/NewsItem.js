import React, { Component } from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "83%",zIndex: 1}}>{source}</span> */}
                <img src={imageUrl != null ? imageUrl : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} className="card-img-top" alt="..." style={{ height: "13rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    {/* <p><b>{publishedDate}</b></p> */}
                </div>
            </div>
        </div>
    )
}

export default NewsItem
