import { Component, OnInit }          from '@angular/core';

import { SharedService }      from '../shared.service';
import { SolrResponse }      from '../solr/solrResponse';
import { solrUrl } from "../solr/solrUrl";

@Component({
    moduleId: module.id,
    selector: 'my-trade',
    templateUrl: `./tradeData.component.html`,
    styleUrls: ['./tradeData.component.css']
})

export class TradeDataComponent implements OnInit {
    
    tradeData: SolrResponse;
    pageUp:number = -1;
    pageDown:number = 1;
    totalCounts:number;
    start:number;
    rows:number;
    lastRow:number;
    disabledNext = false;
    disabledPrev = false;

    constructor(private sharedService: SharedService){};
    
   // as the component initialized,
   // it is already hooked with the service
   // so it gets Trade data of new url and displays it.
   
    ngOnInit(){
        this.sharedService.getTradeData().subscribe((data:SolrResponse) => {
            this.tradeData = data;
            this.totalCounts = this.tradeData.response.numFound;
            this.start = this.tradeData.response.start;
            this.rows = this.tradeData.response.docs.length;
            this.lastRow = this.start + this.rows;

            // to disable button after certain action
            // add [disabled]="isDisabled" to html page
            // and in function, use, this.isDisabled = true;

            console.log(this.tradeData);
            console.log("totalCounts: "+this.tradeData.response.numFound);
            console.log("starting: "+this.start);
            console.log("lastRow: "+this.lastRow);
            console.log("rows: "+this.rows);

            if(this.lastRow >= this.totalCounts) {
                console.log("lastRow: "+this.lastRow);
                console.log("disable next button");
                this.disabledNext = true;

            } 
            if(this.start == 0 ){
                console.log("disable prev button");
                this.disabledPrev = true;
                this.disabledNext = false;
            }
            if(this.start > 0){
                console.log("enable prev button");
                this.disabledPrev = false;
            }

        })   
    }

    onNext(event){
        

        console.log("Next button is clicked"); 
       
        this.sharedService.setPages(this.pageDown, this.totalCounts);
    }

    onPrev(){
        console.log("prev button is clicked");
        
        this.sharedService.setPages(this.pageUp, this.totalCounts)
    }
}