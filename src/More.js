import React, { Component } from "react";
import ReactImageAppear from 'react-image-appear';
import Resizer from 'react-image-file-resizer';


class More extends Component {
  render() {
    return (

 <ReactImageAppear 
    src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F236x%2F5d%2Fba%2F94%2F5dba94df60927cdbc50e7add30c80180--cartoon.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fskazkodrom_com%2Fbrickleberry%2F&tbnid=Fsvh_-KcZdhxcM&vet=12ahUKEwic_beEyOLqAhWn2OAKHarMCt8QMygEegUIARC6AQ..i&docid=yvcmWDwEtWBkyM&w=215&h=215&q=maloy%20brickleberry&hl=en&client=ubuntu&ved=2ahUKEwic_beEyOLqAhWn2OAKHarMCt8QMygEegUIARC6AQ"
    loaderStyle={{ border: "2px solid red" }}
/>
 
    );
  }
}
 
export default More;
