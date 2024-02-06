//impt shortcut to input proptype
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd, showInfo }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
      color="yellow" 
      text="Info" 
      onClick={showInfo} />
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
