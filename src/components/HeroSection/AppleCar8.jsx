import React from "react";

const AppleCar8 = () => {
  return (
    <div className="bg">
      <div className="latest-header">
        <br />
        <h2>
          Saving and offers..{" "}
          <span>Exclusive deals, special stores and more.</span>
        </h2>
      </div>
      <br />
      <div className="apple-car8-container">
        <div className="apple-car8-content">
          <span>LIMITED TIME OFFER</span>
          <br />
          <h1>Save on Mac and iPad for college.</h1>
          <p>
            Plus get upto 12 months of No Cost EMI <br />
            on selected models.
          </p>
        </div>

        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202503_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95"
          alt="Mac and iPad Offer"
        />
      </div>
    </div>
  );
};

export default AppleCar8;
