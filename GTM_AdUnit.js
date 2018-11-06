import * as React from "react";

type Props = {
  name: string,
  size: string
};

class AdTech_GTM_AdUnit extends React.Component<Props> {
  render() {
    return (
      <div>
        <div
          className={"ADTECH_GTM_AdUnit " + this.props.name}
          allowedsizes={this.props.size}
        />
      </div>
    );
  }
}

export default AdTech_GTM_AdUnit;
