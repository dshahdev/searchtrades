import { Component } from '@angular/core';
import { Http }   from '@angular/http';



import { TaskdataService }  from './taskdata.service';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: [TaskdataService]
})
export class AppComponent {
  title = 'app';
}

/*

@Component({
  selector: 'my-app',
  template: `
              <my-main></my-main>
              <solr-form></solr-form>
              <my-trade></my-trade>`
})
export class AppComponent { 
  
}

*/
