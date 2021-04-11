import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class OutputScreen extends React.Component {
  render() {
    return (
        <>
        <p>{this.props.total}{this.props.operator}</p>
        </>


    );
  }
}
export default OutputScreen;
