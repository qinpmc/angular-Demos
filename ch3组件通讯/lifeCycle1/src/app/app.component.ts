import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycle1';

  greeting:string = "父组件的greeting";

  user:{name:string} = {name:"父组件的userName=Tom"};

}
