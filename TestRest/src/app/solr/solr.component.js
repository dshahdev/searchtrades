"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_service_1 = require("../shared.service");
var solrUrl_1 = require("./solrUrl");
var SolrComponent = (function () {
    function SolrComponent(sharedService) {
        this.sharedService = sharedService;
        this.text = "";
        this.url = new solrUrl_1.solrUrl();
        this.start = 0;
        this.numRows = 10;
    }
    SolrComponent.prototype.onSearch = function (searchText) {
        //search text : flange AND mumbai AND china AND SHANGHAI == to test app
        this.text = searchText;
        console.log("submit is clicked: " + searchText);
        //to build new url, take the searchtext from user
        // set it as the param with other hardcoded parma in buildurl function
        this.url.buildURL("10.0.1.22", 8983, "gdata", this.numRows, this.start, searchText);
        // call the service's seturl method, passing new new build url
        this.sharedService.setUrl(this.url.getFinalUrl());
    };
    SolrComponent.prototype.ngOnInit = function () {
        // this code is hooked with service
        // so whenever there is any chnage in service
        // it will reflect here too.
        var _this = this;
        this.sharedService.getStartRow().subscribe(function (num) {
            _this.start = num;
            _this.url.buildURL("10.0.1.22", 8983, "gdata", _this.numRows, _this.start, _this.text);
            _this.sharedService.setUrl(_this.url.getFinalUrl());
        });
        this.setPagging();
    };
    SolrComponent.prototype.setPagging = function () {
        var _this = this;
        this.sharedService.getPages().subscribe(function (page) {
            _this.page = page;
            // this.totalCounts = totalCounts;
            console.log("I got: " + _this.start);
            if (_this.page === 1) {
                _this.start = _this.start + 10;
                _this.url.buildURL("10.0.1.22", 8983, "gdata", _this.numRows, _this.start, _this.text);
                _this.sharedService.setUrl(_this.url.getFinalUrl());
            }
            else if (_this.page === -1) {
                _this.start = _this.start - 10;
                _this.url.buildURL("10.0.1.22", 8983, "gdata", _this.numRows, _this.start, _this.text);
                _this.sharedService.setUrl(_this.url.getFinalUrl());
            }
        });
    };
    return SolrComponent;
}());
SolrComponent = __decorate([
    core_1.Component({
        selector: 'solr-form',
        templateUrl: "app/solr/solrform.component.html",
        styleUrls: ['app/solr/solr.component.css']
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], SolrComponent);
exports.SolrComponent = SolrComponent;
//# sourceMappingURL=solr.component.js.map