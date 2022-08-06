import Spinner from 'react-bootstrap/Spinner';
import './CustomSpinner.css';

export const CustomSpinner = () => (
  <div className="spinner-container">
    <Spinner animation="border" variant="danger" />
  </div>
);
