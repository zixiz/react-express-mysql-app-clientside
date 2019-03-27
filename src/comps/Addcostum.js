import React, { Component } from 'react';


class Addcostum extends Component {

  state = {
    name:"",
    img:"",
    categoryId: 1
  }

  render() {

    return (

      <div className="App">

      <h1>Add Costum</h1>

      name:<input name="name" onChange={this.handletext.bind(this)} />

      picture:<input name="img" onChange={this.handletext.bind(this)} />

      <select name="categoryId" onChange={this.handletext.bind(this)}>

         {this.props.allcategories.map(c => <option key={c.category_id} value={c.category_id} >{c.age}</option>)}

      </select>

      <button onClick={this.sendCostum.bind(this)}>Add</button>

      </div>

    );

  }

  handletext(ev) {

    this.setState({[ev.target.name] : ev.target.value});

  }

  async sendCostum () {

    let res = await fetch('http://localhost:3000/costum', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }); 

    let data = await res.json();

    alert(data.msg);
    this.props.refreshCostumes();

  }
  
}

export default Addcostum;
