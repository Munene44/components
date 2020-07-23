import React, { Component } from "react";
import ReactImageAppear from 'react-image-appear';
import Resizer from 'react-image-file-resizer';


class More extends Component {
  render() {
    return (

 <ReactImageAppear 
    src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fresources.premierleague.com%2Fphotos%2F2020%2F07%2F01%2F665ee9b6-0ad2-4ca0-80b0-7a4b6a55efb1%2F03150_5th-Stand_1080x1080_v1.jpg%3Fwidth%3D500%26height%3D333&imgrefurl=https%3A%2F%2Fwww.premierleague.com%2Fclubs%2F4%2FChelsea%2Foverview&tbnid=nUCoU3Y_XGkeRM&vet=12ahUKEwiXppjxyOLqAhUx1eAKHW4QBtMQMygGegUIARDiAQ..i&docid=2RgP2Go4zRxw5M&w=500&h=333&q=chelsea&client=ubuntu&ved=2ahUKEwiXppjxyOLqAhUx1eAKHW4QBtMQMygGegUIARDiAQ"
    loaderStyle={{ border: "2px solid red" }}
/>
 
    );
  }
}
 
export default More;
