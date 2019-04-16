import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   ng= 'Angular';
   myName='';

   upCase(st:string){
     this.myName=st;
     alert('I am in upCase :)');
     console.log('in upCase and myName is '+this.myName);
   }




}
