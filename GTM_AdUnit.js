import React, { Component } from "react";
import PropTypes from "prop-types";

class AdTech_GTM_AdUnit extends Component {
  render() {
    return (
      <div>
        <div
          className={
            "ADOPS_GTM_AdUnit " +
            this.props.os +
            "_" +
            this.props.screen +
            " " +
            this.props.name
          }
          id={
            "ADOPS_GTM_AdUnit_" +
            this.props.os +
            "_" +
            this.props.screen +
            "_" +
            this.props.name
          }
        />
      </div>
    );
  }
}

AdTech_GTM_AdUnit.propTypes = {
  screen: PropTypes.string,
  os: PropTypes.string,
  name: PropTypes.string
};
export default AdTech_GTM_AdUnit;
