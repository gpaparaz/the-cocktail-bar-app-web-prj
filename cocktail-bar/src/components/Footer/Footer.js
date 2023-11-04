import React from "react";
import style from "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="container mb-5">
        <h4 class="mb-4">CocktailBar</h4>
        <div class="d-flex">
          <div class="col-sm-3">
            <h5 class="fw-semibold">Link</h5>
            <Link to="/cocktails">Cocktails</Link> <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/contacts">Contatti</Link>
            <br />
          </div>
          <div class="col-sm-3">
            <h5 class="fw-semibold">Indirizzo</h5>
            <p>Via Mazzini 23</p>
            <p>35010, Padova (PD)</p>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
      <div class="d-flex align-items-center footerBottom flex-column">
        <p>P.IVA: 12345678912345</p>
        <p>Copyright 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
