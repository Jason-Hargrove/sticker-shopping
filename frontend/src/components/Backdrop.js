import './Backdrop.css';

// Destructure show prop. If show is true "&&" --> then do this.
const Backdrop = ({ show }) => {
  return show && <div className="backdrop"></div>
};

export default Backdrop;

/* Dont't forget to import into App.js */
