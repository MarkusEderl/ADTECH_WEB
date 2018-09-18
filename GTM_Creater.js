import React, { Component } from 'react';
//import GTM_Creater from './GTM_Creater';
import {gtmScript} from './GTM_Builder';
import PropTypes from 'prop-types';


class GTM extends Component {
	constructor(props) {
		super(props);
		gtmScript(this.props.name);
	}
	
	componentDidMount() {
		var dataLayer = window["dataLayer"] || [];
		dataLayer.push({'event': 'ADTECH_SessionStart'});
		
	}
		
	componentDidUpdate(){
		var dataLayer = window["dataLayer"] || [];
		dataLayer.push({'event': 'ADTECH_GTM-Update'});
	}
  render() {
    return (
		<div></div>
    );
  }
}

GTM.propTypes = {
  name: PropTypes.string
};

export default GTM;

