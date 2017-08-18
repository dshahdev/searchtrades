
export class solrUrl {
    ipAddress: string;
    port: number;
    solr_core_name: string;
    rows:number;
    start_row: number;
    queryText:string;

    url: string;
    // protocol:string = "http://";
    // colon:string = ":";
    FS = "/";
    AMP = "&";
    ROOT = "solr";
    SELECT = "select?indent=on&wt=json";
    AMPQ = this.AMP + "q=";
    AMPSTART = this.AMP + "start=";
    AMPROWS = this.AMP + "rows=";

    finalURL:string = "";

    // constructor(){}

    constructor() {}

    //creates new url

    buildURL(   dbName: string, 
                rw: number, srow:number, qText:string): void {

                    this.solr_core_name = dbName;
                    this.rows = rw;
                    this.start_row = srow;
                    this.queryText = qText;
                    this.finalURL = this.FS + this.ROOT + this.FS +this.solr_core_name +
                                this.FS + this.SELECT + this.AMPQ + this.queryText + 
                                this.AMPROWS + this.rows + this.AMPSTART + this.start_row
        
    }
    // returns new final url
    
    getFinalUrl():string {
        return this.finalURL;
    }
}