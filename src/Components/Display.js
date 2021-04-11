import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputScreen from './InputScreen'
import OutputScreen from "./OutputScreen";


class Display extends React.Component {
  render() {
    return (
        <>
        <div className= 'border' id='screen'>
        <OutputScreen total={this.props.total} />
        <InputScreen operator={this.props.operator} screen={this.props.screen}/>
        </div>
        
        </>


    );
  }
}
export default Display;
