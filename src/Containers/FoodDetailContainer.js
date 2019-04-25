import React, {Component} from 'react';

import FoodDetailComponent from "../Components/FoodDetailComponent";
import {getFoodRecipiesDetail} from "../API/FoodRecipeAPI";

class FoodDetailContainer extends Component{
  constructor(props){
    super(props);
  const {foodId} = this.props.match.params;
  this.state ={
    foodId:foodId,
    foodDetail:{},
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



  render(){
    return(
       <FoodDetailComponent
       foodDetail={this.state.foodDetail}
       />
    )
  }
}


export default FoodDetailContainer;
