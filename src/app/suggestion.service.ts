import { Injectable } from '@angular/core';
import { SearchObject } from './model/searchObject';
@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor() { }
  getSuggestion(keyword: string) {
    let suggestions = [];
    suggestions.push({ Key: "Apple", Value: "Apple is my favourite fruit" });
    suggestions.push({ Key: "hciw", Value: "cfcccfcf" });
    localStorage.setItem("suggestionkey", JSON.stringify(suggestions));


    let result = localStorage.getItem("suggestionkey");
    let re = suggestions.filter(data => data.Key.startsWith(keyword));
    console.log(re);
  }


}


