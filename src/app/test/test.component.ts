import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      {{"Hello " + name}}
    </h2>
    <p>Event based</p>
    <button (click)=fireEvent()>Send Event</button>
    <hr>
    <p>Lowercase</p>
    <h2>{{"PIPES TUTORIAL" | lowercase}}</h2>
    <hr>
    <p>Upper Case</p>
    <h2>{{"pipes tutorial" | uppercase}}</h2>
    <hr>
    <p>Title Case</p>
    <h2>{{"welcome to pipes tutorial" | titlecase}}</h2>
    <hr>
    <p>Slice</p>
    <h2>{{"Pipes Tutorial" | slice:3:7}}</h2>
    <hr>
    <p>Json</p>
    <h2>{{person | json}}</h2>
    <hr>
    <p>Number</p>

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>
    <hr>
    <p>Percentage & Currency<p>
    
    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency:'GBP'}}</h2>
    <h2>{{0.25 | currency:'GBP':'code'}}</h2>
    <hr>
    <p>Date<p>
    
    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
    
    
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter<string>();

  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Welcome to angular Course');
  }

}
