import * as React from "react";
//import GTM_Creater from './GTM_Creater';
import { gtmScript } from "./GTM_Builder";

type Props = {
  name: string
};

class GTM extends React.Component<Props> {
  constructor(props) {
    super(props);
    gtmScript(this.props.name);
  }

  componentDidMount() {
    var dataLayer = window["dataLayer"] || [];
    dataLayer.push({ event: "ADTECH_SessionStart" });
  }

  componentDidUpdate() {
    var dataLayer = window["dataLayer"] || [];
    dataLayer.push({ event: "ADTECH_GTM-Update" });
  }
  render() {
    return null;
  }
}

export default GTM;
