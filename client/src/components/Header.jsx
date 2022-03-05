const react = require('react');
const reactDom = require('react-dom');
import '../style.css';
import logo from '../assets/images/ElysianCorp.jpg';
import heroImg from '../assets/images/GROWMAX.png'

function Header(){
    return (
        <header id="header" className="m-1">
            <div className="container">
                <a href="login.html" className="logo me-auto"><img src={logo} alt="" className="img-border img-fluid"/></a>
            </div>
        </header>
    );
}

export default Header;