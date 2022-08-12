import Box from './components/Box';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import { SiFacebook } from 'react-icons/si';
import { BsTelegram, BsDiscord } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import CookieConsent from 'react-cookie-consent';
import Footer from './components/Footer';
import { BoxData, TextBoxData } from './data/DummyData';
import React from 'react';
import UnityDummy from './components/UnityDummy';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-between flex-column py-5">
                        <h1>Text Field</h1>
                        <h2>Text Field</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="./logo.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-12 d-flex justify-content-center ">
                        <a href="" className="text-decoration-none fs-3" style={{ color: '#98ff98' }}>
                            Play
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row py-2 py-lg-5 play">
                    <div className="col-lg-12 py-4 d-flex justify-content-center">
                        <UnityDummy />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row py-2 py-lg-5 info">
                    {BoxData.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-3 d-flex justify-content-center">
                                <Box Img={item.img} Text={item.text} />
                            </div>
                        );
                    })}
                </div>
                <div className="row py-2 py-lg-5 about">
                    {TextBoxData.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-3 d-flex justify-content-center">
                                <TextBox Title={item.title} Desc={item.desc} />
                            </div>
                        );
                    })}
                </div>
                <div className="row py-2 py-lg-5 community">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center">
                        <div className="mb-4 d-flex justify-content-between">
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="https://discord.com" target="_blank" className="social-link">
                                    <BsDiscord size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="https://twitter.com" target="_blank" className="social-link">
                                    <FaTwitterSquare size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="https://facebook.com" target="_blank" className="social-link">
                                    <SiFacebook size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center p-2">
                                <a href="https://telegram.com" target="_blank" className="social-link">
                                    <BsTelegram size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CookieConsent
                location="bottom"
                buttonText="Understood"
                cookieName="myAwesomeCookieName2"
                style={{ background: '#2B373B', textAlign: 'center' }}
                buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
                expires={150}
            >
                This website uses cookies to enhance the user experience
            </CookieConsent>
            <Footer />
        </div>
    );
}

export default App;
