import React from 'react';
import axios from 'axios';

export default class Food extends React.Component {
  state = {
    food: []
  }

componentGetFood(){
  axios.get('http://127.0.0.1:8000/')
  .then(res => {
    const food = res.data;
    this.setState({ food });
  })
}

render(){
  return (
    <ul>
      {this.state.food.map(food =><li>{food.name}</li>)}
      {this.state.food.map(food =><li>{food.longDescription}</li>)}
      {this.state.food.map(food =><li>{food.ingredients}</li>)}
      {this.state.food.map(food =><li>{food.tips}</li>)}
      {this.state.food.map(food =><li>{food.foodinstructions}</li>)}
    <ul>
  )
}
}
