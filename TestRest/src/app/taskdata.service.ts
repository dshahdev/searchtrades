import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions }  from '@angular/http';
import 'rxjs/Rx';

import { Tasks }       from './tasks';

@Injectable()
export class TaskdataService {
  public url:string = "http://localhost:3000/Tasks";

  constructor(private http:Http) { }

  getAllTasks() {
    //  const headers = new Headers({'Content-Type': 'application/json'});
    //  let options = new RequestOptions({headers: headers});
    //  headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //  headers.append('Access-Control-Allow-Methods', 'GET');
    //  headers.append('Access-Control-Allow-Origin', '*');

    return  this.http.get(this.url)
        .map((response:Response) => response.json());
  }
  
  deleteTask(item:Tasks){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.delete(this.url+item.Id,options)
        .map((response:Response) => response.json());
  }
    
  addTask(item:Tasks){
    let body = JSON.stringify(item);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.url,body,options)
        .map((response:Response) => response.json());
  }
    
  getTaskId(id:any){
    return this.http.get(this.url + id)
        .map((response:Response) => response.json());
  }
    
  editTask(item:Tasks){
    let body = JSON.stringify(item);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers}); 

    return this.http.put(this.url+item.Id,body,options)
        .map((response:Response) => response.json());

  }

}
