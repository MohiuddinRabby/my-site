import React, { useState } from 'react';
import portfolioData from '../../Data/Portfoliodata/portfoliodata';
import PortfolioCards from './PortfolioCards';

const Portfolio = () => {
    const profolioData = portfolioData;
    const [project, setProject] = useState(profolioData);
    const primaryTextColor = {
        // color1: '#3399ff',
        color1: '#007399',
        color2: '#004080',
        color3: '#206040',
        borderRadious: '50%'
    }
    return (
        <div className="py-5">
            <div className="container">
                <h2 style={{ color: primaryTextColor.color1 }}>Recent works</h2>
                <div className="row py-5">
                    {
                        project.map(item => <div className="col-md-4" key={item.id}>
                            <PortfolioCards projects={item}></PortfolioCards></div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;