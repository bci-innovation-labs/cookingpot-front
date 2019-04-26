import React, {Component} from 'react';

import FoodDetailComponent from "../Components/FoodDetailComponent";
import {getFoodRecipiesDetail} from "../API/FoodRecipeAPI";

class FoodDetailContainer extends Component{
  constructor(props){
    super(props);
    this.onchange=this.onChange.bind(this);
  const {foodId} = this.props.match.params;
  this.state ={
    foodId:foodId,
    foodDetail:{},
    searchTerm:"",
  }
}

componentDidMount(){
      getFoodRecipiesDetail(
        this.state.foodId,
        (data) =>{
          this.setState({
            foodDetail:data
          });

        },
        (error)=>{
        }
      )
  }

onChange(event){
  this.setState({
    [event.target.name]:event.target.value,
  })
}


  render(){
    return(
       <FoodDetailComponent
       foodDetail={this.state.foodDetail}
       searchTerm={this.state.searchTerm}
       onChange={this.state.onChange}

       />
    )
  }
}


export default FoodDetailContainer;
