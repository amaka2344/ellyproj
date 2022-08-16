import React from "react";
import { Link } from "react-router-dom";

function Stake () {
    return (
        <>
            <header>
                <nav className="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line">
                    <div className="container">
                        <Link to="#slider-section" title="Logo" className="logo scroll">
                            <img src="/vendor/moonitemplate/images/mooni_logo.png" alt="logo" className="ml-lg-3 m-0" />
                        </Link>

                        <div className="collapse navbar-collapse" id="megaone">
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-link line" to="/">Home</Link>
                                <Link className="nav-link line" to="/balance">Farming</Link>
                                <Link to="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xed438051437c22a9ef249b68c7e292435fe8b858" target="_blank" className="btn btn-medium btn-rounded btn-pink nav-button">Buy</Link>
                            </div>
                        </div>
                    </div>

                    <div className="navigation-toggle">
                        <ul className="slider-social toggle-btn my-0">
                            <li>
                                <Link to="javascript:void(0);" className="sidemenu_btn" id="sidemenu_toggle">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="side-menu hidden">

                    <span id="btn_sideNavClose">
                        <i className="las la-times btn-close"></i>
                    </span>
                    <div className="inner-wrapper">
                        <nav className="side-nav w-100">
                            <Link to="#slider-section" title="Logo" className="logo scroll navbar-brand">
                                <img src="/vendor/moonitemplate/images/mooni_logo.png" alt="logo" />
                            </Link>
                            <ul className="navbar-nav text-capitalize">
                                <li className="nav-item">
                                    <Link className="nav-link" to="index.html">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="stake.html">Stake</Link>
                                </li>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                    <Link to="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xed438051437c22a9ef249b68c7e292435fe8b858" target="_blank" className="btn btn-medium btn-rounded btn-pink nav-button">Buy</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="side-footer w-100">
                            <ul className="social-icons-simple">
                                <li><Link className="social-icon wow fadeInRight" to="https://twitter.com/moonidefi" data-wow-delay="300ms"><i className="fab fa-twitter"></i> </Link> </li>
                                <li><Link className="social-icon wow fadeInLeft" to="https://t.me/moonichat" data-wow-delay="300ms"><i className="fab fa-telegram-plane"></i> </Link> </li>
                                <li><Link className="social-icon wow fadeInRight" to="https://moonidefi.medium.com/" data-wow-delay="300ms"><i className="fab fa-medium"></i> </Link> </li>
                            </ul>
                            <p>&copy; 2021 M O O N I DeFi - Binance Smart Chain</p>
                        </div>
                    </div>
                </div>
                <Link id="close_side_menu" to="#"></Link>
            </header>

            <div id="stake-section" className="stake-section">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-white font-weight-700">MOONI POOL</h3>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <img width="150px" src="/vendor/moonitemplate/images/mooni_logo.png" alt="image" />
                                    <p className="my-2 text-pink font-40 font-weight-700">0.000</p>
                                    <p className="mb-1 text-grey font-weight-500">MOONI earned</p>
                                </div>
                                <div>
                                    <div className="mb-5">
                                        <button className="btn btn-medium btn-rounded btn-dark" style={{ width: "140px", height: "40px", lineHeight: "18px" }}>Harvest</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-medium btn-rounded btn-light" style={{ width: "140px", height: "40px", lineHeight: "18px" }}>Compound</button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center my-3">
                                <button className="btn btn-medium btn-rounded btn-secondary mr-3" style={{ width: "40%", height: "50px", lineJeight: "18px" }}>Unstake MOONI</button>
                                <button className="btn btn-medium btn-rounded btn-pink" data-toggle="modal" data-target="#depositModal" style={{ width: "50px", height: "50px", lineJeight: "18px" }}><i className="fa fa-plus"></i></button>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="text-purple mb-0">APR:</p>
                                <div className="text-right text-white">
                                    <p className="mb-0 font-weight-600">1.0000</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="text-purple mb-0">Your Stake:</p>
                                <div className="text-right text-white">
                                    <p className="mb-0 font-weight-600">0.0000</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="modal fade" id="depositModal" tabIndex="-1" role="dialog" aria-labelledby="depositModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-white" id="depositModalLabel">Deposit MOONI Tokens</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-right">
                                <p className="mb-2 text-purple font-14 font-weight-500">0 MOONI Available</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <input className="form-control" type="number" step="0.0001" value="0" />
                                <p className="mb-0 text-pink font-weight-600">MOONI</p>
                                <button className="btn btn-medium btn-rounded btn-pink" style={{ height: "30px", lineHeight: "8px", padding: "10px 20px" }}>Max</button>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-medium btn-rounded btn-pink-outline mr-3" data-dismiss="modal" style={{ width: "44%", height: "54px", lineHeight: "18px" }}>Cancel</button>
                                <button className="btn btn-medium btn-rounded btn-pink" style={{ width: "44%", height: "54px", lineHeight: "18px" }}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="connectWalletModal" tabIndex="-1" role="dialog" aria-labelledby="connectWalletModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-white" id="connectWalletModalLabel">Connect Wallets</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-between align-items-center wallet-div" data-dismiss="modal">
                                <p className="text-white mb-0">Metamask</p>
                                <img width="30px" src="/vendor/moonitemplate/images/metamask.png" alt="image" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center wallet-div" data-dismiss="modal">
                                <p className="text-white mb-0">Metamask</p>
                                <img width="30px" src="/vendor/moonitemplate/images/metamask.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stake;