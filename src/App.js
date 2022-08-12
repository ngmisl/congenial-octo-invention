import Box from './components/Box';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import { BsTelegram, BsDiscord } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import CookieConsent from 'react-cookie-consent';
import Footer from './components/Footer';
import { BoxData, TextBoxData } from './data/DummyData';
import React from 'react';
import UnityDummy from './components/UnityDummy';
import { Link } from 'react-scroll';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-between flex-column py-5">
                        <h1>Welcome to Mint World!</h1>
                        <h2>NFT powered, 2d Play and Earn Catcher!</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="./logo.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-12 d-flex justify-content-center ">
                        <Link to="play" className="text-decoration-none fs-3" style={{ color: '#98ff98', cursor: 'pointer' }}>
                            Play
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row py-2 py-lg-5 play">
                    <div className="col-lg-12 py-4 d-flex justify-content-center">
                        <h1>MintWorld v0 Testnet (Mumbai)</h1>
                    </div>
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
                                <a href="https://discord.com" target="_blank" className="social-link" rel="noreferrer">
                                    <BsDiscord size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="https://twitter.com/MintWorldGG" target="_blank" className="social-link" rel="noreferrer">
                                    <FaTwitterSquare size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center p-2">
                                <a href="https://telegram.com" target="_blank" className="social-link" rel="noreferrer">
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
