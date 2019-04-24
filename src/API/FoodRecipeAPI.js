import {SAMPLE_DATA} from "../constants"


let foodRecipesData = SAMPLE_DATA;


export function getFoodRecipies(Search=null,filter={}, okCallback, badCallback){
  okCallback(foodRecipesData)
}
