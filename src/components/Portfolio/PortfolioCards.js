import React from 'react';

const PortfolioCards = (props) => {
    const cardStyle = {
        color1: '#b3ecff',
        color2: '#66b3ff',
    }
    const { title, img, link, gitrepo } = props.projects;
    return (
        <div className="">
            <div className="card" style={{ backgroundColor:'#f5f5f0', border: `1px solid ${cardStyle.color2}` }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={link} rel="noopener noreferrer" target="_blank" className="btn btn-info btn-sm">Live Demo</a> <a href={gitrepo} rel="noopener noreferrer" target="_blank" className="btn btn-info btn-sm"><i className="fab fa-github-square fa-x"></i> Git Repo</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCards;