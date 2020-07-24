import React, { Component } from "react";
import ReactImageAppear from 'react-image-appear';
import Resizer from 'react-image-file-resizer';


class More extends Component {
  render() {
    return (

 <ReactImageAppear 
    src="{Component, logo192.png}"
    loaderStyle={{ border: "2px solid red" }}
/>
 
    );
  }
}
 
export default More;
