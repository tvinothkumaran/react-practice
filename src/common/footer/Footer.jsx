import React from "react";
import logo from "../Assest/images/img/logo1-removebg-preview.png";

export default function () {
  const year = new Date();
  return (
    <div className="footerpage">
      <div className="container">
        <div className="lower">
          <div className="row ">
            <div className="col-sm- 12 col-md-12 col-lg-4 col-xl-4 ">
                <div className="row">
                  <div className="col-sm- 6 col-md-6 col-lg-6 col-xl-6 ">
                    <p className="bcon1">Company</p>
                    <p className="bcon2">vission </p>
                    <p className="bcon2">Mission</p>
                    <p className="bcon2">Core Values</p>
                    <p className="bcon2">Contact US</p>
                    <p className="bcon2">Branding</p>
                    <p className="bcon2">Team </p>
                    <p className="bcon2">Careers</p>
                    <p className="bcon2">FAQ</p>
                  </div>
                  <div className="col-sm- 6 col-md-6 col-lg-6 col-xl-6 ">
                  <p className="bcon3">Products</p>
                  <p className="bcon4">Edan Token</p>
                  <p className="bcon4">Digital Clinic</p>
                  <p className="bcon4">School of Cryptos</p>
                  <p className="bcon4">Litepaper</p>
                  <p className="bcon4">Whitepaper</p>
                  <p className="bcon4">Welfare Donations</p>
                  <p className="bcon4">How to Use Loreum</p>
                </div>

               
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 centersec">
              <img src={logo} className="img-fluid fcon-im" alt="logo" />
              <p className="fcon-p">Subscribe Our Newsletter</p>
              <form class="form-inline">
                <input
                  class="search11"
                  type="search"
                  placeholder="Enter email id"
                  aria-label="Search"
                />
                <button class="bwt" type="submit">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
              <div className="leg">
                <div className="row ">
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                    <p className="bcon5">Legal</p>
                    <p className="bcon6">Terms of use</p>
                    <p className="bcon6">Privacy policy</p>
                    <p className="bcon6">Disclaimers</p>
                    <p className="bcon6">Listing T&C</p>
                  </div>
                
                  <div className="col-sm- 6 col-md-6 col-lg-6 col-xl-6">
                    <p className="bcon7">Communities</p>
                    <p className="bcon8">Facebook</p>
                    <p className="bcon8">Instagram</p>
                    <p className="bcon8">Telegram</p>
                    <p className="bcon8">Twitter</p>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      <footer>
        Copyright &copy; {year.getFullYear()} Loreum is a product of EDA
        Holdings.All Rights Reserved.{" "}
      </footer>
    </div>
  );
}
