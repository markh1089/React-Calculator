import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";



class Keypad extends React.Component {
  render() {    

    return (
        <>

        <Button className='btn-danger border' id='ce' onClick={this.props.clear} value="ce">CE</Button>
        <Button className='btn-danger border' onClick={this.props.del} value="DEL">DEL</Button>
        <Button className='border' onClick={this.props.operation} value="/">/</Button>
        <Button className='border' onClick={this.props.onClick} value="7">7</Button>
        <Button className='border' onClick={this.props.onClick} value="8">8</Button>
        <Button className='border' onClick={this.props.onClick} value="9">9</Button>
        <Button className='border' onClick={this.props.operation} value="*">X</Button>
        <Button className='border' onClick={this.props.onClick} value="4">4</Button>
        <Button className='border' onClick={this.props.onClick} value="5">5</Button>
        <Button className='border' onClick={this.props.onClick} value="6">6</Button>
        <Button className='border' onClick={this.props.operation} value="-">-</Button>
        <Button className='border' onClick={this.props.onClick} value="1">1</Button>
        <Button className='border' onClick={this.props.onClick} value="2">2</Button>
        <Button className='border' onClick={this.props.onClick} value="3">3</Button>
        <Button className='border' onClick={this.props.operation} value="+">+</Button> 
        <Button className='border' onClick={this.props.onClick} value=".">.</Button>
        <Button className='border' onClick={this.props.onClick} value="0">0</Button>
        <Button className='btn-success border' id='equals' onClick={this.props.equals}  value="=">=</Button>  
        
 
        </>
    );
  }
}
export default Keypad;
