import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio({ data }) {
    return (
        <section className="content ">
            <h1>Портфолио</h1>
            <ul className="portfolio_list">
                {data.map((item, index) => 
                    <li key={index} className="portfolio_item">
                        <Link to={`/portfolio/${item.slug}`} className="portfolio_item-img_wrap">
                            <img className="portfolio_item-img" src="img/angular-in-action.jpg" alt=""/>
                        </Link>
                        <div className="portfolio_item-wrap">
                            <p className="portfolio_item-type">  
                                {item.type}
                            </p>
                            <h3 className="portfolio_item-title">
                                {item.title}
                            </h3>
                            <p className="portfolio_item-descript">
                                {item.description}
                            </p>
                            <Link to={`/portfolio/${item.slug}`} className="mdc-button mdc-card__action">Подробнее</Link>
                        </div>
                    </li>)
                }
            </ul>
        </section>
    );
}

export default Portfolio;