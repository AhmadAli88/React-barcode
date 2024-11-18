import React, { useState } from "react";
import Barcode from "react-barcode";

const ModalWithBarcode = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Barcode Modal</button>
      {show && (
        <div style={{ border: "1px solid #ccc", padding: "20px", width: "300px" }}>
          <h3>Scan Me!</h3>
          <Barcode value="MODAL12345" />
        </div>
      )}
    </div>
  );
};

export default ModalWithBarcode;
