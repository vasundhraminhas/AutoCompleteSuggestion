import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-box',
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.css']
})
export class SuggestionBoxComponent implements OnInit {

  _suggestions = [
    { id: 1, key: 'Apple', value: 'Apple is a fruit' },
    { id: 2, key: 'banana', value: 'Banana is a fruit' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
