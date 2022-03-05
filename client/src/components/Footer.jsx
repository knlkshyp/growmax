const react = require('react');
const reactDom = require('react-dom');
import '../style.css';
import logo from '../assets/images/ElysianCorp.jpg';
import heroImg from '../assets/images/GROWMAX.png'

function footer(){
    return (
        <>
            <footer id='footer' className='position-absolute bottom-0 start-50 translate-middle-x text-center'>
                <div className="copyright">
                    &copy; Copyright <strong><span>Elysian Corptech</span></strong>. All Rights Reserved
                </div>
            </footer>
        </>
    );
}

export default footer;