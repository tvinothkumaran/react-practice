import React, { useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import leftimg from "../Assest/images/img/bannerheade.png";
import simg from "../Assest/images/img/bannerheade.png";
import tom1 from "../Assest/images/download/jerry 1.png";
import tom2 from "../Assest/images/download/jerry 2.png";
import tom3 from "../Assest/images/download/jerry 3.png";
import tom4 from "../Assest/images/download/jerry 4.png";
import smallimg1 from "../Assest/images/download/si1 .png";
import picture1 from "../Assest/images/download/images1.jpeg";
import picture2 from "../Assest/images/download/images2.jpeg";
import picture3 from "../Assest/images/download/images3.jpeg";
import picture4 from "../Assest/images/download/images4.jpeg";
import picture5 from "../Assest/images/download/images5.jpeg";
import picture6 from "../Assest/images/download/images6.jpeg";
import picture7 from "../Assest/images/download/images7.jpeg";
import picture8 from "../Assest/images/download/images8.jpeg";
import picture9 from "../Assest/images/download/images9.jpeg";
import picture10 from "../Assest/images/download/images10.jpeg";
import picture11 from "../Assest/images/download/images11.jpeg";
import picture12 from "../Assest/images/download/images12.jpeg";
import vj from "../Assest/images/img/vijay.jpeg";
import surya from "../Assest/images/img/surya.jpg";
import Header from "../header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../footer/Footer";
AOS.init();

export default function () {
  const options={
    items:3,
    loop:true,
    nav:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      },
      1200:{
        items:3
    }
  }
  }
  const [first, setFirst] = useState([
    {
      pic: tom1,
      para: "Jerry",
    },

    {
      pic: tom2,
      para: "Jerry",
    },

    {
      pic: tom3,
      para: "Tom&Jerry",
    },

    {
      pic: tom4,
      para: "Tom",
    },
  ]);
  const [second, setSecond] = useState([
    {
      pic: smallimg1,
      para1: "lenine queries",
      para2: "178 items",
    },
    {
      pic: smallimg1,
      para1: "lenine queries",
      para2: "178 items",
    },
    {
      pic: smallimg1,
      para1: "lenine queries",
      para2: "178 items",
    },
    {
      pic: smallimg1,
      para1: "lenine queries",
      para2: "178 items",
    },
    {
      pic: smallimg1,
      para1: "lenine queries",
      para2: "178 items",
    },
    {
      pic: smallimg1,
      para1: "lenine queries",
      para2: "178 items",
    },
    {
      pic: smallimg1,
      para1: "lenine queries",
      para2: "178 items",
    },
    {
      pic: smallimg1,
      para1: "lenine queries",
      para2: "178 items",
    },
  ]);
  const [five, setFive] = useState([
    {
      pic: picture1,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture2,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture3,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture4,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
  ]);
  const [six, setSix] = useState([
    {
      pic: picture5,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture6,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture7,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture8,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture9,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture10,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture11,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
    {
      pic: picture12,
      para1: "Women NFT #325",
      para2: "Highest Bid",
      para3: "15,000 BUSD",
      spic1: vj,
      spic2: surya,
      para4: "@robert03",
      para5: "by lorem ipsum",
    },
  ]);
  return (
    <div className="fullpage">
      <Header/>
      <div className="top-page">
        <div className="container">
          <div className="row">
            <div className="col-sm- 12 col-md-6 col-lg-6 col-xl-6">
              <div className="carding ">
                <div>
                  <p className="discover ">Discover</p>
                  <p className="digital">Digital art & collect NFTs</p>
                </div>
                <div>
                  <p className="paragraph">
                    Loreum is a user interfaced aggregator that bring all the
                    various functionaliies of the crypto industry onto a single
                    platform! Edsface is a uer interface aggregator that brings
                    all the various functionalities of the crypto industry onto
                    a single platform!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm- 12 col-md-6 col-lg-6 col-xl-6">
              <div className="carding2">
                <img
                  className="img-fluid leftimg"
                  src={leftimg}
                  alt="leftimg"
                />
                <div>
                  <img className="img-fluid simg" src={simg} alt="simg" />
                  <div>
                    <p className="spara">Blue studios NFT</p>
                    <p className="spara2">by lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondslot">
        <div className="container">
          <div className="row">
            <p className="secondslotp1 mt-5 mb-5"data-aos="fade-left" >Hot collections</p>
            <OwlCarousel className='owl-theme'  margin={10}  {...options}>
            {first.map((e) => (
              
              <div className="item">
              <div className="col-sm- 12 col-md-12 col-lg-12 col-xl-12">
                 <div className="carding3 mb-3">
                   <img className="img-fluid tom" src={e.pic} alt="tom" />
                   <p className="catpara">{e.para}</p>
                 </div>
               </div>
              </div>
            ))}
           

            </OwlCarousel>
          
          </div>
        </div>
      </div>
      <div className="Thirtlot">
        <div className="container">
          <div className="row">
            <p className="secondslotp1 mt-5 mb-5" data-aos="fade-up-left">Top creaters</p>
            {second.map((e) => (
              <div className="col-sm- 6 col-md-6 col-lg-6 col-xl-3">
                <div className="carding4 mb-3" data-aos="flip-left">
                  <img className="img-fluid thirdimg" src={e.pic} alt="small" />
                  <div className="thirdp">
                    <p className="thirdpara1">{e.para1}</p>
                    <p className="thirdpara2">{e.para2}</p>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fourthslot">
        <div className="container">
          <div className="row">
            <p className="secondslotp1 mt-5 mb-5" data-aos="fade-up-right">Live Auctions</p>
            {five.map((e) => (
              <div className="col-sm- 6 col-md-6 col-lg-3 col-xl-3">
                <div className="carding5 mb-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                  <div>
                    <img
                      className="img-fluid fourthimg"
                      src={e.pic}
                      alt="fourthimg"
                    />
                  </div>
                  <div className="fourthp">
                    <p className="fourthpara1">{e.para1}</p>
                    <div className="para23">
                      <p className="fourthpara2">{e.para2}</p>
                      <p className="fourthbusd">{e.para3}</p>
                    </div>

                    <div>
                      <img
                        className="img-fluid fourthsml"
                        src={e.spic2}
                        alt="sml"
                      />
                      <img
                        className="img-fluid fourthsm2"
                        src={e.spic1}
                        alt="sml"
                      />
                    </div>
                    <div>
                      <p className="fourthpara3">{e.para4}</p>
                      <p className="fourthpara4">{e.para5}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fourthslot">
        <div className="container">
          <div className="row">
            <p className="secondslotp1 mt-5 mb-5"data-aos="fade-down-right">Recently Added NFTs</p>
            {six.map((e) => (
              <div className="col-sm- 3 col-md-6 col-lg-3 col-xl-3">
                <div className="carding5 mb-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                  <div>
                    <img
                      className="img-fluid fourthimg"
                      src={e.pic}
                      alt="fourthimg"
                    />
                  </div>
                  <div className="fourthp">
                    <p className="fourthpara1">{e.para1}</p>
                    <div className="para23">
                      <p className="fourthpara2">{e.para2}</p>
                      <p className="fourthbusd">{e.para3}</p>
                    </div>
                    <div>
                      <img
                        className="img-fluid fourthsml"
                        src={e.spic2}
                        alt="sml"
                      />
                      <img
                        className="img-fluid fourthsm2"
                        src={e.spic1}
                        alt="sml"
                      />
                    </div>
                    <div>
                      <p className="fourthpara3">{e.para4}</p>
                      <p className="fourthpara4">{e.para5}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container" >
          <div className="row">
            <div className="col-sm- 12 col-md-12 col-lg-12 col-xl-12 ">
              <div className="ca1">
              <button className="loadmore" >Load More</button>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}
