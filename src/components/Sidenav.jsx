import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidenav (props) {
    console.log(props)
    return (
        <menu className={`site__nav${props.statusMenu ? ' site__nav--hide' : ''}`}>
            <ul className="site__nav-list">
                <li className="site__nav-item">
                    <NavLink to="/charts" className="site__nav-link" activeClassName="site__nav-link--active">
                        <i className="material-icons">business_center</i>                    
                        <span className="site__nav-link--text">Графики курсов валют</span>
                    </NavLink>
                </li>
                <li className="site__nav-item">
                    <NavLink to="/news-it" className="site__nav-link" activeClassName="site__nav-link--active">
                        <i className="material-icons">business_center</i>                    
                        <span className="site__nav-link--text">Новости ИТ</span>
                    </NavLink>
                </li>
                <li className="site__nav-item">
                    <NavLink to="/portfolio" className="site__nav-link" activeClassName="site__nav-link--active">
                        <i className="material-icons">business_center</i>
                        <span className="site__nav-link--text">Портфолио</span>
                    </NavLink> 
                </li>
                {/*<li className="site__nav-item">
                    <NavLink to="/discounts-on-map" className="site__nav-link" activeClassName="site__nav-link--active">
                        <i className="material-icons">business_center</i>
                        <span className="site__nav-link--text">Топ скидки в вашем районе</span>
                    </NavLink>
                </li>*/}
                <li className="site__nav-item site__nav-item--toggleMenu">
                    <button className="material-icons site__nav-toogle-button" onClick={props.onToggleMenu}>{`${props.statusMenu ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}`}</button>
                </li>
            </ul>
        </menu>
    );
}


export default Sidenav;