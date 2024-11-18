import React from "react";
import Barcode from "react-barcode";

const CustomizedBarcode = () => {
  return (
    <div>
      <h2>Customized Barcode</h2>
      <Barcode
        value="987654321012"
        format="EAN13"
        width={1.5}
        height={120}
        text="Custom Barcode"
        fontSize={16}
        background="#f0f0f0"
        lineColor="#000"
      />
    </div>
  );
};

export default CustomizedBarcode;
