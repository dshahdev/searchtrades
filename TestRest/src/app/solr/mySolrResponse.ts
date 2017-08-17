
import { MySolrResponseDoc } from './/mySolrResponseDoc';

export class MySolrResponse {
    numFound:number;
    start:number;
    docs:[MySolrResponseDoc];
}