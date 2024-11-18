import PropTypes from 'prop-types';
import Barcode from 'react-barcode';

const BarcodeComponent = ({ value, format }) => (
  <Barcode value={value} format={format} />
);

BarcodeComponent.propTypes = {
  value: PropTypes.string.isRequired,
  format: PropTypes.string,
};

BarcodeComponent.defaultProps = {
  format: 'CODE128',
};

export default BarcodeComponent;
