import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/" >Main</Link>
    <Link to="/firstPage" >container + presentational component</Link>
    <Link to="/secondPage" >render prop</Link>
    <Link to="/thirdPage" >function as children</Link>
    <Link to="/fourthPage" >Higher Order Component</Link>
    <Link to="/fifthPage" >Refs</Link>
    <Link to="/sixthPage" >Component and PureComponent</Link>
    <Link to="/seventhPage" >Selectors</Link>
  </header>
);

export default Header;
