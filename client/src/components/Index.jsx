const react = require('react');
import '../style.css';
import Footer from './Footer'
import logo from '../assets/images/ElysianCorp.jpg';
import heroImg from '../assets/images/GROWMAX.png'

function Index(){
    return (
        <main id="main" className='position-relative'>
            <section id="hero">
                <div className="container">
                    <div className="banner row align-items-center">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                            <img src={heroImg} alt="GrowMax" className="heroImg"/>
                            <h2>Better Solutions For Your Business</h2>
                            <h3>We are a creative group of people who Build strategies, Build confidence, Build your business. Build confidence, Build your business. Build confidence, Build your business.</h3>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <button type="button" className="btn learnMoreCTA">Learn More</button>
                            </div>
                        </div>
                        <div className="login justify-content-center col-lg-6 order-1 order-lg-2">
                            <div className="formHeader">
                                <img src={logo} className="formHeaderImg rounded-circle mx-auto d-block mb-3" alt="elysiancorptech"/>
                            </div>
                            <form className="row align-items-center p-5 g-3" method="post" action="/order" id="loginForm">
                                <div className="col-md-6">
                                    <input type="radio" className="" id="radio1"/>
                                    <label for="" className="fs-4 form-label">BUSINESS</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="radio" className="" id="radio2"/>
                                    <label for="" className="fs-4 form-label">OTHERS</label>
                                </div>
                                <div className="col-md-12 text-center">
                                    <label for="userIdLabel" className="form-label mb-0">USER NAME</label>
                                    <input name="userId" type="text" maxlength="12" id="adminUserId" placeholder="User Id" className="rounded form-control" required/>
                                </div>
                                <div className="col-md-12 text-center">
                                    <label for="passwordLabel" className="form-label mb-0">PASSWORD</label>
                                    <input name="password" type="password" id="adminPassword" className="rounded form-control" placeholder="Password" required/>
                                </div>
                                <div className="col-12">
                                    <button type="submit" name="login" value="Login" id="login" onclick="return validate()"className="rounded signInCTA col-12">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}

export default Index;