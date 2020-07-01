import React from 'react';

const PortfolioCards = (props) => {
    const cardStyle = {
        color1: '#b3ecff',
    }
    const { title, img, link, gitrepo } = props.projects;
    return (
        <div className="">
            <div className="card" style={{ border: `1px solid ${cardStyle.color1}` }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={link} rel="noopener noreferrer" target="_blank" className="btn btn-outline-info btn-sm">Live Demo</a> <a href={gitrepo} rel="noopener noreferrer" target="_blank" className="btn btn-outline-info btn-sm"><i className="fab fa-github-square fa-x"></i> Git Repo</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCards;