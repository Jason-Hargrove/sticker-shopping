import './Backdrop.css';

// Destructure show prop. If show is true "&&" --> then do this.
const Backdrop = ({ show, click }) => {
  return show && <div className="backdrop" onClick={click}></div>
};

export default Backdrop;

/* Dont't forget to import into App.js */
