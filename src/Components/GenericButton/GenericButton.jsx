/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './GenericButton.css';

const GenericButton = ({ text, onClick, icon, style }) => {
  return (
    <button className="generic-button" style={style} onClick={onClick}>
      <FontAwesomeIcon className='icon-sidebar' icon={icon} />
      <p>{text}</p>
    </button>
  );
};

export default GenericButton;