import React, { Component } from 'react';


class Costum extends Component {

  render() {

    return (

      <div className="App">
        <div><h3>{this.props.costume.costume_name}</h3></div>
        <div><img src={this.props.costume.image_url} /></div>
        <div>Age:{this.props.costume.category_name}</div>
      </div>

    );

  }
  
}

export default Costum;
