import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/" className="link1">Main</Link>
    <Link to="/firstPage" className="link2" >container + presentational component</Link>
    <Link to="/secondPage" className="link3" >render prop</Link>
    <Link to="/thirdPage" className="link4" >function as children</Link>
    <Link to="/fourthPage" className="link5" >Higher Order Component</Link>
    <Link to="/fifthPage" className="link6" >Refs</Link>
    <Link to="/sixthPage" className="link7" >Component and PureComponent</Link>
    <Link to="/seventhPage" className="link8" >Selectors</Link>
  </header>
);

export default Header;
