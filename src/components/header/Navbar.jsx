import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaKPsB3n3oQKXglaA8I2NTu56kgbhoRAWog&s"
            alt="logo"
            height={50}
          />
        </div>
        <ul className="ul">
          <li>store</li>
          <li>mac</li>
          <li>ipad</li>
          <li>iphone</li>
          <li>watch</li>
          <li>airpods</li>
          <li>Tv&Home</li>
          <li>entertainment</li>
          <li>accessories</li>
          <li>support</li>
        </ul>
      </nav>
      <div>
        <p className="txt">
          Get up to 6 months of No Cost EMI Footnote ◊ plus up to ₹10000.00
          instant cashback Footnote ∆ on selected products with eligible cards.{" "}
          <a href="#">See Offers</a>
        </p>
      </div>
      <br/>
    </>
  );
};

export default Navbar;
