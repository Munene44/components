import React from 'react';
import ReactImageAppear from 'react-image-appear';

class Pic extends React.Component {
    constructor(props) {
        super(props);
    }

 render() {
        return (
            <ReactImageAppear 
                src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
                animation="zoomIn"
                animationDuration="1s"
            />  
        );
    }
}