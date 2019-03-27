import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addcostum from './comps/Addcostum';
import Showcostum from './comps/Showcostum';

class App extends Component {

  state = {
    categories: [],
    costumes: []
  }
  
  async componentDidMount () {

    let res = await fetch('http://localhost:3000/ages');

    let categories = await res.json();

    this.setState({categories:categories});
    this.refreshCostumes();

  }

  async refreshCostumes() {
    let res = await fetch('http://localhost:3000/costum');
    let costume = await res.json();
    this.setState({costumes:costume})

      
  }

  render() {

    return (

      <div className="App">

      <Addcostum allcategories={this.state.categories} refreshCostumes={this.refreshCostumes.bind(this)} />

      <Showcostum costumes={this.state.costumes} />

      </div>

    );

  }

}

export default App;
