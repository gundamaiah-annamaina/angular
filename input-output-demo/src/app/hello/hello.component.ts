import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() myFriend: string;
  @Output() onClick= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickMe(){

    alert("I am in clickMe :)")
    alert('MyFriend is '+this.myFriend)
    this.onClick.emit('Gunda');
  }

    

}
