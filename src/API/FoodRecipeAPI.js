import {SAMPLE_DATA} from "../constants";
import {MENU_FOOD_DATA} from "../constants";
import { TEACH_FOOD_DATA } from "../constants";


let foodRecipesData = MENU_FOOD_DATA;
let foodRecipesDetail = TEACH_FOOD_DATA;


export function getFoodRecipies(Search=null,filter={}, okCallback, badCallback){
  console.log("search")
  okCallback(foodRecipesData);
}


export function getFoodRecipiesDetail(id,okCallback,badCallback){
  for (let i = 0; i < foodRecipesDetail.length; i ++){
    let foodDetail = foodRecipesDetail[i];
    if (foodDetail.id == id){
      okCallback(foodDetail);
      return;
    }

  }
  badCallback({});
}
