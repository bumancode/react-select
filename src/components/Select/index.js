import React from 'react';
import PropTypes from 'prop-types';
import './main.css';

class Select extends React.Component {
  constructor(props){
  	super(props)
  }

  render(){
    return( 
        <input />
    	);
  }
}

Select.propTypes = {
  label: PropTypes.string,
  palceholer: PropTypes.string
};
Select.defaultProps = {
  label: 'Select',
  placeholder: 'Select'
};
export default Select;