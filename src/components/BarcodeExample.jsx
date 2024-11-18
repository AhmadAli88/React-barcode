import React from "react";
import Barcode from "react-barcode";

const BarcodeExample = () => {
  return (
    <div>
      <h1>Product Barcode</h1>
      <Barcode value="123456789" />
    </div>
  );
};

export default BarcodeExample;
