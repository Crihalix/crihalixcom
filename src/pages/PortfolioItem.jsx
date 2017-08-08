import React from 'react';

function PortfolioItem({ match, data }) {
    console.log(data); 
    console.log(match);
    const item = data.find(item => item.slug === match.params.item);
 
    return (
        <section className="content">
            <h1>{item.title}</h1>
            <p>{item.discription}</p>
            <p>{item.type}</p>
        </section>
    );
}

export default PortfolioItem;