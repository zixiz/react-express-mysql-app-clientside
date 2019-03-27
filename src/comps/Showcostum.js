import React, { Component } from 'react';
import Costum from './Costum';

class Showcostum extends Component {

  render() {

    return (

      <div className="App">

        <h2>All Costumes</h2>
        <div>
          {this.props.costumes.map(costume => <Costum key={costume.costume_id} costume={costume} />)}
        </div>
      </div>

    );

  }
  
}

export default Showcostum;
