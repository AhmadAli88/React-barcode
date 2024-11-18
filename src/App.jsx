import React from "react";
import BarcodeComponent from "./components/BarcodeComponent";
import BarcodeExample from "./components/BarcodeExample";
import CustomizedBarcode from "./components/CustomizedBarcode";
import ModalWithBarcode from "./components/ModalWithBarcode";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Barcode Example</h1>
      <BarcodeComponent value="123456789" />
      <BarcodeExample/>
      <CustomizedBarcode/>
      <ModalWithBarcode/>
    </div>
  );
};

export default App;
