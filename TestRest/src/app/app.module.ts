import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { TaskdataService } from './taskdata.service';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { MainComponent }      from './main/main.component';
import { SolrComponent }      from './solr/solr.component';
import { TradeDataComponent } from  './trade/tradeData.component';
import { SharedService }        from  './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    MainComponent,
    SolrComponent,
    TradeDataComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [TaskdataService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
