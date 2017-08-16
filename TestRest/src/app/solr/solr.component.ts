import { Component, OnInit }        from '@angular/core';
import { SharedService }    from '../shared.service';
import { solrUrl } from "./solrUrl";

@Component({
    selector: 'solr-form',
    templateUrl: `./solrform.component.html`,
    styleUrls: ['./solr.component.css']
    
     
})

export class SolrComponent implements OnInit {
    text:string = "";
    url:solrUrl = new solrUrl();
    start:number = 0;
    numRows: number = 10;
    page: number;
    totalCounts: number;
    constructor(private sharedService: SharedService) {}

    onSearch(searchText:string){
        //search text : flange AND mumbai AND china AND SHANGHAI == to test app
        
        this.text = searchText;

        console.log("submit is clicked: " + searchText);
        
        //to build new url, take the searchtext from user
        // set it as the param with other hardcoded parma in buildurl function
        
        this.url.buildURL("10.0.1.22",8983,"gdata",this.numRows,this.start,searchText);
      

        // call the service's seturl method, passing new new build url

        this.sharedService.setUrl(this.url.getFinalUrl());
        
        
    }
   
    ngOnInit(){
        // this code is hooked with service
        // so whenever there is any chnage in service
        // it will reflect here too.

        this.sharedService.getStartRow().subscribe((num:number) => {
            this.start = num;
            this.url.buildURL("10.0.1.22",8983,"gdata",this.numRows,this.start,this.text);  
            this.sharedService.setUrl(this.url.getFinalUrl());
        }) ;
        this.setPagging();  
    }

    setPagging(){

        this.sharedService.getPages().subscribe((page:number ) => {
            this.page = page;
            // this.totalCounts = totalCounts;
            console.log("I got: "+this.start); 

            if(this.page === 1){

                this.start = this.start + 10;
                this.url.buildURL("10.0.1.22",8983,"gdata",this.numRows,this.start,this.text); 
                this.sharedService.setUrl(this.url.getFinalUrl());  
            
            } else if(this.page === -1){

                this.start = this.start - 10;
                this.url.buildURL("10.0.1.22",8983,"gdata",this.numRows,this.start,this.text);
                this.sharedService.setUrl(this.url.getFinalUrl());  

            }  
       })
       
        
        
    }
}