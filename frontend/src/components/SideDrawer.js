import './SideDrawer.css';

// Needs dynamic styles.
const SideDrawer = ({ show }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return <div className={sideDrawerClass.join(" ")}></div>
};

export default SideDrawer;

/* Dont't forget to import into App.js */
