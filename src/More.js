import React, { Component } from "react";
import ReactImageAppear from 'react-image-appear';
import Resizer from 'react-image-file-resizer';


class More extends Component {
  render() {
    return (

 <ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    loaderStyle={{ border: "2px solid red" }}
/>
 
    );
  }
}
 
export default More;