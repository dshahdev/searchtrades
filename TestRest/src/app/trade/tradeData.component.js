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
var TradeDataComponent = (function () {
    function TradeDataComponent(sharedService) {
        this.sharedService = sharedService;
        this.pageUp = -1;
        this.pageDown = 1;
        this.disabledNext = false;
        this.disabledPrev = false;
    }
    ;
    // as the component initialized,
    // it is already hooked with the service
    // so it gets Trade data of new url and displays it.
    TradeDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getTradeData().subscribe(function (data) {
            _this.tradeData = data;
            _this.totalCounts = _this.tradeData.response.numFound;
            _this.start = _this.tradeData.response.start;
            _this.rows = _this.tradeData.response.docs.length;
            _this.lastRow = _this.start + _this.rows;
            // to disable button after certain action
            // add [disabled]="isDisabled" to html page
            // and in function, use, this.isDisabled = true;
            console.log(_this.tradeData);
            console.log("totalCounts: " + _this.tradeData.response.numFound);
            console.log("starting: " + _this.start);
            console.log("lastRow: " + _this.lastRow);
            console.log("rows: " + _this.rows);
            if (_this.lastRow >= _this.totalCounts) {
                console.log("lastRow: " + _this.lastRow);
                console.log("disable next button");
                _this.disabledNext = true;
            }
            if (_this.start == 0) {
                console.log("disable prev button");
                _this.disabledPrev = true;
                _this.disabledNext = false;
            }
            if (_this.start > 0) {
                console.log("enable prev button");
                _this.disabledPrev = false;
            }
        });
    };
    TradeDataComponent.prototype.onNext = function (event) {
        console.log("Next button is clicked");
        this.sharedService.setPages(this.pageDown, this.totalCounts);
    };
    TradeDataComponent.prototype.onPrev = function () {
        console.log("prev button is clicked");
        this.sharedService.setPages(this.pageUp, this.totalCounts);
    };
    return TradeDataComponent;
}());
TradeDataComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-trade',
        templateUrl: "./tradeData.component.html",
        styleUrls: ['./tradeData.component.css']
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], TradeDataComponent);
exports.TradeDataComponent = TradeDataComponent;
//# sourceMappingURL=tradeData.component.js.map