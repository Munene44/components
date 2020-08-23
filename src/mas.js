import React from 'react';
import ReactDOM from 'react-dom';


 
class Home extends Component {
  render() {
    return (
      <div>
      <img src={this.props.src}/>
        <h2>Reacting</h2>
        <p>Anothes thing that can be confusing to people is that attributes are not automatically passed
down to all the nested children when they are nested more than one level. You’ll see that the
function attribute passed to Home must also be passed down to the Saves component, and it
can have a completely different name! The same goes for all the other props. Here, we</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}
export default post;