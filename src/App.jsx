import React, { useState } from 'react'
import Swiper from 'swiper';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6'];

  return (
    <>
      <div className="bg">
        <div className="interface">
          <div className="topBg">
            <div className="leftTop">
              <div className="profileImg">
                <div className="imgBack">
                  <img src="../public/images/SIMPLE CHATBOTS.png" alt="" />
                  {/* <img src="../public.images/dot.png" alt="" /> */}
                </div>
                <div className="text">
                  <h2>Timpu <img src="../public/images/8018-verified-yellow.png" alt="" /></h2>
                  <p>Chat assistant</p>
                </div>
              </div>
            </div>
            <div className="rightTop">
              <p>Online</p>
            </div>
          </div>

          <div className="received">
            <p>Hi Sam! I am your personal <br /> shopping assistant, how can i <br />help you today ?</p>
          </div>
          <div className="timeBot">
            <p>4:45 PM</p>
          </div>

          <div className="sent">
            <p>I am looking for a Hand bag, <br /> with long strap</p>
          </div>
          <div className="timeBot2">
            <p>4:46 PM</p>
          </div>

          <div className="frame">
            <div className="text-wrapper">Popular tags for handbag</div>
            <div className="div">
              <div className="div-2">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">Clutch</div>
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">Fabric lining</div>
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">Baggit</div>
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">Multi Compartment</div>
                  </div>
                </div>
              </div>
              <img src="../public/images/right.png" alt="" />
            </div>
          </div>
          <div className="frame2">
            <div className="div">
              <div className="div-2">
                <div className="div-3">
                  <div className="div-4" />
                  <div className="div-5">
                    <div className="div-6">
                      <div className="bags-on-timpu-wrapper">
                        <img src="./public/images/bags.png" alt="aesdf  " />
                        <p className="bags-on-timpu">
                          <span className="text-wrapper">Bags on </span>
                          <span className="span">Timpu</span>
                        </p>
                      </div>
                      <div className="check">

                        <img src="../public/images/8018-verified-yellow.png" alt="" />
                      </div>
                      {/* <img className="vector" alt="Vector" src="vector.svg" /> */}
                    </div>
                    <div className="div-7">
                      <div className="text-wrapper-2">1123 products</div>
                      <img src="../public/images/right.png" alt="" />
                    </div>
                  </div>
                </div>
                <p className="p">Or set filter and help us choose the best bag for you.</p>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-3">4:48 PM</div>
              </div>
            </div>
            <div className="div-8">
              <div className="div-9">
                <div className="text-wrapper-4">Select filters</div>
                <div className="div-10">
                  <img className="sliders-horizontal" alt="Sliders horizontal" src="sliders-horizontal.svg" />
                  <div className="text-wrapper-5">Filter</div>
                </div>
              </div>
              <div className="div-11">
                <div className="div-12">
                  <div className="div-13">
                    <div className="text-wrapper-6">Strap</div>
                    <div className="text-wrapper-6">-</div>
                    <div className="text-wrapper-7">Long</div>
                  </div>
                  <img className="check-square" alt="Check square" src="check-square-2.svg" />
                </div>
                <div className="div-14">
                  <div className="text-wrapper-8">Colour</div>
                  <img className="check-square" alt="Check square" src="image.svg" />
                </div>
                <div className="div-14">
                  <div className="text-wrapper-8">Size</div>
                  <img className="check-square" alt="Check square" src="check-square-2-2.svg" />
                </div>
                <div className="div-14">
                  <div className="text-wrapper-8">Brand</div>
                  <img className="check-square" alt="Check square" src="check-square-2-3.svg" />
                </div>
                <div className="div-14">
                  <div className="text-wrapper-8">Material</div>
                  <img className="check-square" alt="Check square" src="check-square-2-4.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className="frame">
            <div className="div">
              <div className="div-2">
                <div className="text-wrapper">Type your message</div>
                <img className="paperclip" alt="Paperclip" src="paperclip.svg" />
              </div>
              <img className="img" alt="Frame" src="frame-5617.svg" />
            </div>
            <div className="div-3">
              <div className="text-wrapper-2">Powered by</div>
              <div className="text-wrapper-3">Krunk.ai</div>
              <img className="logo" alt="Logo" src="logo.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
