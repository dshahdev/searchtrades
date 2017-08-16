
import { MySolrResponseDoc } from './/mysolrResponseDoc';

export class MySolrResponse {
    numFound:number;
    start:number;
    docs:[MySolrResponseDoc];
}