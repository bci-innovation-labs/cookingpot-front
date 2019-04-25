import {SAMPLE_DATA} from "../constants"


let foodRecipesData = SAMPLE_DATA;


export function getFoodRecipies(Search=null,filter={}, okCallback, badCallback){
  okCallback(foodRecipesData);
}


export function getFoodRecipiesDetail(id,okCallback,badCallback){
  for (let i = 0; i < foodRecipesData.length; i ++){
    let foodDetail = foodRecipesData[i];
    if (foodDetail.id == id){
      okCallback(foodDetail);
      return;
    }

  }
  badCallback({});
}
