"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solrUrl = (function () {
    // constructor(){}
    function solrUrl() {
        this.protocol = "http://";
        this.colon = ":";
        this.FS = "/";
        this.AMP = "&";
        this.ROOT = "solr";
        this.SELECT = "select?indent=on&wt=json";
        this.AMPQ = this.AMP + "q=";
        this.AMPSTART = this.AMP + "start=";
        this.AMPROWS = this.AMP + "rows=";
        this.finalURL = "";
    }
    //creates new url
    solrUrl.prototype.buildURL = function (address, pt, dbName, rw, srow, qText) {
        this.ipAddress = address;
        this.port = pt;
        this.solr_core_name = dbName;
        this.rows = rw;
        this.start_row = srow;
        this.queryText = qText;
        this.finalURL = this.protocol + this.ipAddress + this.colon +
            this.port + this.FS + this.ROOT + this.FS + this.solr_core_name +
            this.FS + this.SELECT + this.AMPQ + this.queryText +
            this.AMPROWS + this.rows + this.AMPSTART + this.start_row;
    };
    // returns new final url
    solrUrl.prototype.getFinalUrl = function () {
        return this.finalURL;
    };
    return solrUrl;
}());
exports.solrUrl = solrUrl;
//# sourceMappingURL=solrUrl.js.map